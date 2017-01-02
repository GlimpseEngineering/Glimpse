const Promise = require('bluebird');

const redis = require('promise-redis')(resolver => {
  return new Promise(resolver);
});

const models = require('./db.connect.js');

const port = process.env.REDIS_PORT || 6379;
const host = process.env.REDIS_HOST || '127.0.0.1';

const client = redis.createClient(port, host);

client.on('error', err => {
  console.log('Error connecting to redis server...', err);
});

client.on('connect', () => {
  console.log(`Redis server connection has been established to: ${host}:${port}`);
  require('../redis/redis.helpers.js').generateCache();
});

module.exports = client;

/**
 * thoughts on redis datatypes
 * 
 * sorted set is better than a list for looking up something like a post or user
 * hashes are a good way to store users/posts
 * sets would be great for associating tags with posts/users b/c cant make duplicate keys and adding/removing time complexity is O(1)
 * lists would be great for getting all the latest posts by users (see episode 6 of redis series)
 */