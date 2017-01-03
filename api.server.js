const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./api/routes/index.js');
const redisRoutes = require('./api/routes/redis.routes.js');
const PORT = process.env.PORT || 8080;

const models = require('./api/config/db.connect.js'); 

module.exports = (PORT) => {
  const app = express();
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, 'build')));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use('/api', routes);
  app.use('/api/cache', redisRoutes);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  require('./api/config/redis.connect.js');
};