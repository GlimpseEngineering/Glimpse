const models = require('../../config/db.connect.js');

module.exports = {
  getAllPosts: (req, res, next) => {
    models.Post.findAll({})
    .then(posts => res.json(posts))
    .catch(err => {
      res.json(err);
      throw err;  
    });
  },
  getOnePost: (req, res, next) => {
    models.Post.find({
      where: {
        id: req.params.postId
      }
    })
    .then(post => res.json(post))
    .catch(err => {
      res.json(err);
      throw err;
    });
  },
  getPostsByUser: (req, res, next) => {
    models.Post.findAll({
      where: { userId: req.params.userId }
    })
    .then(posts => {
      if (!Array.isArray(posts)) posts = [posts];
      res.json(posts);
    })
    .catch(err => {
      res.json(err);
      throw err;
    })
  },
  getPostsByTag: (req, res, next) => {
    models.Post.findAll({
      include: [{ 
        model: Tag,
        where: { tagId: req.params.tagId }
      }],
    })
    .then(posts => {
      if (!Array.isArray(posts)) posts = [posts];
      res.json(posts);      
    })
    .catch(err => {
      res.json(err);
      throw err;
    })
  },
  createPost: (req, res, next) => {
    models.Post.create({
      content: req.body.content,
      description: req.body.description,
      format: req.body.format,
      userId: req.body.userId
    })
    .then(post => res.json(post))
    .catch(err => {
      res.json(err);
      throw err;
    })
  },
  updatePost: (req, res, next) => {
    models.Post.update({
      content: req.body.content,
      description: req.body.description,
      format: req.body.format,
      userId: req.body.userId
    },
    {
      where: { id: req.params.postId } 
    })
    .then(post => res.json(post))
    .catch(err => {
      res.json(err);
      throw err;
    })
  },
  respondToPost: (req, res, next) => {
    models.User_Emoji_Post.create({
      userId: req.body.userId,
      emojiId: req.body.emojiId,
      postId: req.body.postId
    })
    .then(emoji => res.json(emoji))
    .catch(err => {
      res.json(err);
      throw err;
    })
  }
}
