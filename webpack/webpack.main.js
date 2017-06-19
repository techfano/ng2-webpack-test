const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {

        entry: {
            main: './src/main.ts'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }
            ]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(
              /angular(\\|\/)core(\\|\/)@angular/,
              path.resolve(__dirname, '../src')
            ),
            new HtmlWebpackPlugin({
             title: 'Webpack2 unit test demo',
             minify: {
               collapseWhitespace: true
             },
             hash: true,
             template: 'src/index.ejs'
           }),
           new ExtractTextPlugin({
             filename: 'app.css',
             disable: false,
             allChunks: true
           })
        ]

};
