const red_client = require('../config/redis.connect.js');
const models = require('../config/db.connect.js');

module.exports = {
  cacheUsers: (req, res, next) => {
    let activeId = req.params.activeId;
    let userIdKeys = {};
    let userIdList;
    let userCache = {};

    models.Follow.findAll({
      where: {
        UserId: activeId
      }
    })
    .then(followedByUser => {
      followedByUser.forEach(user => {
        if (user.status === 'accepted') {
          userIdKeys[user.FollowId] = 'cached'; 
        }
      }) 
      return models.Follow.findAll({
        where: {
          FollowId: activeId
        }
      })
    })
    .then(followersForUser => {
       followersForUser.forEach(user => {
        if (user.status === 'accepted') {
          userIdKeys[user.UserId] = 'cached'; 
        }
      })
      let userIdList = Object.keys(userIdKeys);
      return models.User.findAll({
        where: {
          id: userIdList
        }
      })
    })
    .then(users => {
      users.forEach(user => {
        userCache[user.id] = user;
      })
      red_client.set('Users', JSON.stringify(userCache));
      res.json(users);
    })
    .catch(err => {
      res.json(err)
      throw err;
    });
  },

  getCachedUsers: (req, res, next) => {
    red_client.get('Users')
      .then(users => {
        res.json(JSON.parse(users));
      })
      .catch(err => {
        res.json(err);
        throw err;
      });
  },

  deleteCachedUsers: (req, res, next) => {
    red_client.del('Users')
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
        throw err;
      });
  }
};