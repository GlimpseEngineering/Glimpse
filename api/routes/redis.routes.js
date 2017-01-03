const express = require('express');
const router = express.Router();
const redisControllers = require('../redis/redis.controllers.js');

router
  .route('/users')
    .get(redisControllers.getCachedUsers)
    .delete(redisControllers.deleteCachedUsers);

router
  .route('/users/:activeId')
    .get(redisControllers.cacheUsers);

module.exports = router;