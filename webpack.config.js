const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = path.resolve(__dirname, 'dev');
const build = path.resolve(__dirname, 'build');

const config = {
  entry: dev + '/index.jsx',

  module: {
    loaders: [
      {
      include: dev,
      loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  output: {
    path: build,
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true })
  ]
}

module.exports = config;
