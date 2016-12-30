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
      where: { id: req.params.postId }
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
    });
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
    });
  },
  createPost: (req, res, next) => {
    console.log('Here is the createPost request body', req.body);
    let postInstance;
    models.Post.create({
      content: req.body.content,
      description: req.body.description,
      format: req.body.format,
      private: req.body.private,
      UserId: req.body.userId
    })
    .then(result => {
      postInstance = result;
      if (req.body.tags) {
        let tags = req.body.tags.split(',');
        console.log('Here are the split tags', tags);
        tags.forEach((tag) => {
          models.Tag.findOrCreate({
            where: { name: tag },
            defaults: { name: tag }
          })
          .then(result => postInstance.addTag(result[0]))
          .catch(err => {
            res.json(err);
            throw err;
          });
        });
      }
      res.json(postInstance);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },
  updatePost: (req, res, next) => {
    let tags = JSON.parse(req.body.tags);
    models.Post.findOne({
      where: { id: req.params.postId}
    })
    .then(post => {
      if (!post) res.json('post not found');
      else {
        post.content = req.body.content,
        post.description = req.body.description,
        post.format = req.body.format,
        post.private = req.body.private,
        post.UserId = req.body.userId        
      }
      return post.save();
    })
    .then(post => {
      postInstance = post;
      tags.forEach((tag) => {
        models.Tag.findOrCreate({
          where: { name: tag },
          defaults: { name: tag }
        })
        .then(result => postInstance.addTag(result[0]))
        .catch(err => {
          res.json(err);
          throw err;
        });
      });
      res.json(postInstance);
    })
    .catch(err => {
      res.json(err);
      throw err;
    });
  },
  respondToPost: (req, res, next) => {
    models.User_Emoji_Post.create({
      UserId: req.body.userId,
      EmojiId: req.body.emojiId,
      PostId: req.body.postId
    })
    .then(emoji => res.json(emoji))
    .catch(err => {
      res.json(err);
      throw err;
    });
  }
};
