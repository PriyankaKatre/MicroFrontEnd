import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js'
import commonConfig from './webpack.common.js';
import packageJson from '../package.json' with { type: "json" };
console.log('packageJson', packageJson)
const devConfig = {
    mode: 'development',
    output: {
        publicPath: "http://localhost:8083/"
    },
    devServer: {
      port: '8083',
      historyApiFallback: {
        index: '/index.html'
        },
        headers: {
          'Access-Control-Allow-Origin': '*'
      }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
              './dashboardApp': './src/bootstrap.js'
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
  ],
}

export default merge(commonConfig, devConfig)
