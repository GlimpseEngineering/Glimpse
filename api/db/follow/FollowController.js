const models = require('../../config/db.connect.js');

module.exports = {
  getFollowersForUser: (req, res, next) => {
    models.Follow.findAll({
      where: {
        FollowId: req.params.userId,
        status: 'accepted'
      }
    })
    .then(result => {
      if (Array.isArray(result)) res.json(result);
      else res.json([result]);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },
  requestFollow: (req, res, next) => {
    models.Follow.findOrCreate({
      where: {
        UserId: req.params.userId,
        FollowId: req.params.followId,
        status: 'pending'
      },
      defaults: {
        UserId: req.params.userId,
        FollowId: req.params.followId,
        status: 'pending'
      }
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },
  acceptFollow: (req, res, next) => {
    models.Follow.findOne({
      where: {
        UserId: req.params.userId,
        FollowId: req.params.followId,
        status: 'pending'
      }
    })
    .then(result => {
      if (result !== null) {
        result.status = 'accepted'
        return result.save();
      } else {
        res.json([]);
      }
    })
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        res.json([]);
      }
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },
  deleteFollow: (req, res, next) => {
    models.Follow.findOne({
      where: {
        UserId: req.params.userId,
        FollowId: req.params.followId,
        status: 'accepted'
      }
    })
    .then(result => {
      return result.destroy();
    })
    .then(result => {
      res.json([result])
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },
  getFollowedByUser: (req, res, next) => {
    models.Follow.findAll({
      where: {
        UserId: req.params.userId,
        status: 'accepted'
      }
    })
    .then(result => {
      if (Array.isArray(result)) res.json(result);
      else res.json([result]);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  }
};
