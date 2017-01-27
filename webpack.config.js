const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        Index: ['./src/js/index.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/static'),
        publicPath: 'static/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            chunks: ['Index'],
            filename: '../index.html',
            template: './src/tpl/index.html',
            inject: true
        })
    ]
}