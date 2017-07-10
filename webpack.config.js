const webpack = require('./node_modules/webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: "/desc/",
        inline: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        })
    ],
}

module.exports = config
