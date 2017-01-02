const red_client = require('../config/redis.connect.js');
const models = require('../config/db.connect.js');

module.exports = {
  cacheAllUsers: () => {
    return models.User
      .findAll({})
      .then(users => {
        if (!users) return [];
        else return red_client.set('Users', JSON.stringify(users));
      })
      .then(cachedUsers => {
        return cachedUsers;
      })
      .catch(err => {
        throw err;
      });
  }, 

  generateCache: () => {
    return module.exports
      .cacheAllUsers()
      .then(cached => {
        if (cached) return true;
        else return false;
      })
      .catch(err => {
        throw err;
      });
  }
};