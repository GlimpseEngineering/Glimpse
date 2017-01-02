const express = require('express');
const router = express.Router();
const redisControllers = require('../redis/redis.controllers.js');

router
  .route('/users')
    .get(redisControllers.getUsers);

module.exports = router;