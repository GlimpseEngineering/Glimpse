const red_client = require('../config/redis.connect.js');
const models = require('../config/db.connect.js');

module.exports = {
  getUsers: (req, res, next) => {
    red_client
      .get('Users')
      .then(users => {
        console.log('Parsed users after getting from redis db', JSON.parse(users));
        if (users) res.json(JSON.parse(users));
        else return models.User.findAll({})
      })
      .then(users => {
        let allUsers = [];
        users.map(user => {
          allUsers.push(user.dataValues);
        })
        res.json(allUsers);
        let stringifiedUsers = JSON.stringify(allUsers);
        return stringifiedUsers;
      })
      .then(stringifiedUsers => {
        return red_client.set('Users', stringifiedUsers);
      })
      .catch(err => {
        throw err;
      });
  }
};