const express = require('express');
const router = express.Router();
const userController = require('../db/user/UserController');
const postController = require('../db/post/PostController');
const followController = require('../db/follow/FollowController.js');

/** USER CONTROLLER ROUTES */
router
  .route('/users')
    .get(userController.getAllUsers) //MVP
    .post(userController.createNewUser) //MVP

router
  .route('/users/:userId')
    .get(userController.getOneUser) //MVP
    .put(userController.updateUser)

router
  .route('/login')
    .post(userController.findUser);

router
  .route('/tags/:tagId/users')
    .get(userController.getUsersWithTag)

router
  .route('/search/users/:userId/:searchterm')
    .get(userController.searchUsers)

/** POST CONTROLLER ROUTES */
router
  .route('/posts')
    .get(postController.getAllPosts) //MVP
    .post(postController.createPost) //MVP

router
  .route('/posts/:postId')
    .get(postController.getOnePost) //MVP
    .post(postController.respondToPost)
    .put(postController.updatePost)
    .delete(postController.deletePost)

router
  .route('/tags/:tagId/posts')
    .get(postController.getPostsByTag)

router
  .route('/users/:userId/posts')
    .get(postController.getPostsByUser) //MVP

/** FOLLOWS CONTROLLER ROUTES */
router
  .route('/users/:userId/follows/:followId')
    .post(followController.requestFollow) //MVP
    .put(followController.acceptFollow)
    .delete(followController.deleteFollow)

router
  .route('/users/:userId/follows')
    .get(followController.getFollowedByUser)

router
  .route('/users/:userId/followers')
    .get(followController.getFollowersForUser) //MVP

module.exports = router;