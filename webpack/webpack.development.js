const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackMain = require('./webpack.main.js');

module.exports = webpackMerge(webpackMain, {

      devtool: 'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8181,
        stats: 'errors-only',
        open: true,
        hot: true,
        inline: true
      },
      plugins: [new webpack.HotModuleReplacementPlugin()]

});
