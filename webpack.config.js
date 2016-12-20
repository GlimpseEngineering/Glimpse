const webpack = require('webpack');
const path = require('path');

const dev = path.resolve(__dirname, 'dev');
const build = path.resolve(__dirname, 'build/app');

const config = {
  entry: dev + '/index.jsx',
  output: {
    path: build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      include: dev,
      loader: 'babel'
    }]
  },
  watch: true
}

module.exports = config;