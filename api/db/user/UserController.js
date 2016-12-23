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
    .then(user => res.json(user))
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
    })
  },
  createNewUser: (req, res, next) => {
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
      res.json(user);
    })
    .catch(err => {
      res.json(err);
      throw(err);
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
    })
  }
}
