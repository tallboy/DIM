var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: './app/scripts/app.js'
  },
  output: {
    path: "./app/scripts",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

module.exports = config;
