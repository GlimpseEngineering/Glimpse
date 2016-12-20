const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./api/routes');
const PORT = process.env.PORT || 8080;

module.exports = (PORT) => {
  const app = express();
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, 'build')));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use('/api', routes);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};