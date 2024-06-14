import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js'
import commonConfig from './webpack.common.js';
import packageJson from '../package.json' with { type: "json" };
console.log('packageJson', packageJson)
const devConfig = {
    mode: 'development',
    devServer: {
      port: '8081',
      historyApiFallback: {
        index: 'index.html'
      }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './marketingApp': './src/bootstrap.js'
            },
            shared: packageJson.dependencies,
        }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
  ],
}

export default merge(commonConfig, devConfig)
