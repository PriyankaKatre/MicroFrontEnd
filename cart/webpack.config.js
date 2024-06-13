import HtmlWebpackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';

export default {
    mode: 'development',
    devServer: {
        port: '8082'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'myCart',
            filename: 'remoteEntry.js',
            exposes: {
                './cartShow': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
