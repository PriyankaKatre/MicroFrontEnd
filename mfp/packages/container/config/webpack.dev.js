import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js'
import commonConfig from './webpack.common.js';
import packageJson from '../package.json' with { type: "json" };

const devConfig = {
    mode: 'development',
    output: {
        publicPath: "http://localhost:8080/"
    },
    devServer: {
      port: '8080',
      historyApiFallback: {
        index: '/index.html'
      }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8083/remoteEntry.js'
            },
            shared: packageJson.dependencies,
        }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
  ],
}

export default merge(commonConfig, devConfig)
