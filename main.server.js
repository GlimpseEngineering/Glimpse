const appServer = require('./webpack.server.js');
const apiServer = require('./api.server.js');

const PORT = process.env.PORT || 8080;

apiServer(PORT - 1);
appServer(PORT);