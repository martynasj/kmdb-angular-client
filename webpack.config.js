/**
 * Created by martynasjankauskas on 14/04/16.
 */
// can't use es6 imports here
const webpack = require('webpack');

module.exports = {
    entry: [
        "./app/app.js",
        "./app/MainLayout.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        publicPath: ''
    },
    module: {
        loaders: [
            { test: /\.js?$/, include: __dirname + "/app" , loaders: ["babel-loader"] },
            {
                test: /\.scss$/,
                include: __dirname + '/app',
                loaders: ["style", "css", "sass"]
            },
        ]
    },
};