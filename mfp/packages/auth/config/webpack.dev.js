import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js'
import commonConfig from './webpack.common.js';
import packageJson from '../package.json' with { type: "json" };
console.log('packageJson', packageJson)
const devConfig = {
    mode: 'development',
    output: {
        publicPath: "http://localhost:8082/"
    },
    devServer: {
      port: '8082',
      historyApiFallback: {
        index: '/index.html'
      }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
              './authApp': './src/bootstrap.js'
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
  ],
}

export default merge(commonConfig, devConfig)
