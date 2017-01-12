const apiServer = require('./api.server.js');
require('dotenv').config();
const db = require('./api/config/db.connect.js');

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === 'production';

db.sequelize
  .sync()
  .then(() => {
    if (PROD) {
      apiServer(PORT);
    } else {
      const appServer = require('./webpack.server.js');
      apiServer(PORT - 1);
      appServer(PORT);
    }
  })
  .catch((err) => {
    throw err;
  });
