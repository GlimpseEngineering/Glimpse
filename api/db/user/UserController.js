const models = require('../../config/db.connect.js');

module.exports = {
  getOneUser: (req, res, next) => {
    models.User.find({
      where: {
        id: req.params.userId
      }
    })
    .then(user => res.json(user))
    .catch(err => {
      res.json(err);
      throw err;
    });
  },

  updateUser: (req, res, next) => {
    let tags = JSON.parse(req.body.tags);
    models.User.findOne({
      where: { id: req.params.userId }
    })
    .then(user => {
      if (!user) res.json('user not found');
      else {
        user.username = req.body.username,
        user.profPic = req.body.profPic,
        user.authId = req.body.authId,
        user.bio = req.body.bio,
        user.email = req.body.email,
        user.dob = req.body.dob,
        user.gender = req.body.gender,
        user.private = req.body.private
      }
      return user.save();
    })
    .then(user => {
      userInstance = user;
      tags.forEach((tag) => {
        models.Tag.findOrCreate({
          where: { name: tag },
          defaults: { name: tag }
        })
        .then(result => userInstance.addTag(result[0]))
        .catch(err => {
          res.json(err);
          throw err;
        });
      });
      res.json(userInstance);
    })
    .catch(err => {
      res.json(err);
      throw err
    });
  },

  getAllUsers: (req, res, next) => {
    models.User.findAll({})
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },

  createNewUser: (req, res, next) => {
    let userInstance;
    let tags;
    if (req.body.tags) tags = JSON.parse(req.body.tags);
    models.User.create({
      username: req.body.username,
      profPic: req.body.profPic,
      authId: req.body.authId,
      bio: req.body.bio,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender,
      private: req.body.private
    })
    .then(user => {
      userInstance = user;
      if (tags) {
        tags.forEach((tag) => {
          models.Tag.findOrCreate({
            where: { name: tag },
            defaults: { name: tag }
          })
          .then(result => userInstance.addTag(result[0]))
          .catch(err => {
            res.json(err);
            throw err;
          });
        });
      }
      res.json(userInstance);
    })
    .catch(err => {
      res.json(err);
      throw(err);
    });
  },

  findUser: (req, res, next) => {
    models.User.find({
      where: {
        authId: req.body.authId
      }
    }).then((user) => {
      res.json(user);   
    })
    .catch((err) => {
      res.json(err);
    });
  },

  getUsersWithTag: (req, res, next) => {
    models.User.findAll({
      include: [{
        model: Tag,
        where: { tagId: req.params.tagId }
      }],
    })
    .then(users => {
      if (!Array.isArray(users)) users = [users];
      res.json(users);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },

  searchUsers: (req, res, next) => {
    let foundUsers = {
      users: {
        count: null,
        rows: {}
      },
      followedByUser: {}
    };
    models.User.findAndCountAll({
      where: {
        username: {
          $like: '%' + req.params.searchterm + '%'
        }
      },
      limit: 10
    })
    .then(users => {
      foundUsers.users.count = users.count;
      users.rows.forEach((user) => {
        foundUsers.users.rows[user.dataValues.id] = user.dataValues;
      });
      return models.Follow.findAll({
        where: {
          UserId: req.params.userId
        }
      })
    })
    .then(followedByUser => {
      let followedByUserStorage = {};
      followedByUser.forEach((user) => {
        followedByUserStorage[user.FollowId] = user;
      });
      foundUsers.followedByUser = followedByUserStorage;
      res.json(foundUsers);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  }
};
