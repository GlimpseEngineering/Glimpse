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
});

module.exports = client;