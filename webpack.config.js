var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./assets/stylesheets"), path.resolve(__dirname, "./assets/scripts")]
  }
};
