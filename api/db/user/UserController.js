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
    models.User.update({
      profPic: req.body.profPic,
      bio: req.body.bio,
      username: req.body.username,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender
    })
    .then(user => {
      res.json(user);
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
    })
  },
  createNewUser: (req, res, next) => {
    models.User.create({
      profPic: req.body.profPic,
      bio: req.body.bio,
      username: req.body.username,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender
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
