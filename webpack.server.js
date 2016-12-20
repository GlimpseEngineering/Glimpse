const webpack = require('webpack');
const config = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const PORT = process.env.PORT || 8080;

module.exports = (PORT) => {
  const webpackServer = new WebpackDevServer(webpack(config), {
    proxy: {
      "*": `http://localhost:${PORT - 1}`
    }
  });
  webpackServer.listen(PORT, 'localhost');
};