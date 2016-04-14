/**
 * Created by martynasjankauskas on 14/04/16.
 */
// can't use es6 imports here
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "./app/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        publicPath: ''
    },
    module: {
        loaders: [
            // include part specifies for loader not to build external imports from node libraries, i.e. react, material-ui and etc.
            { test: /\.js?$/, include: __dirname + '/app', loaders: ["babel-loader"] },
            {
                test: /\.scss$/,
                include: __dirname + '/app',
                loaders: ["style", "css", "sass"]
            },
            { test: /\.html$/, loader: 'raw' },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Website Starter',
            template: './index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ]
};