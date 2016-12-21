const appServer = require('./webpack.server.js');
const apiServer = require('./api.server.js');
require('dotenv').config();
const db = require('./api/config/db.connect.js');

const PORT = process.env.PORT || 8080;

db.sequelize
  .sync({force: true})
  .then(() => {
    apiServer(PORT - 1);
    appServer(PORT);
  })
  .catch((err) => {
    throw err;
  });