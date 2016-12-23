const express = require('express');
const router = express.Router();
const userController = require('../db/user/UserController');
const postController = require('../db/post/PostController');
const followController = require('../db/follow/FollowController.js');

// //USER CONTROLLER routes================>
// //get one user
// router.get('/users/:userId', userController.getOneUser);//MVP
// //update user
// router.put('/users/:userId', userController.updateUser);
// //get all users
// router.get('/users', userController.getAllUsers);//MVP
// //create new user
// router.post('/users', userController.createNewUser);//MVP
// //get users with tag
// router.get('/tags/:tagId/users', userController.getUsersWithTag);

//USER CONTROLLER routes================>
router
  .route('/users')
    .get(userController.getAllUsers) //MVP
    .post(userController.createNewUser) //MVP

router
  .route('/users/:userId')
    .get(userController.getOneUser) //MVP
    .put(userController.updateUser)

router
  .route('/tags/:tagId/users')
    .get(userController.getUsersWithTag)

// //POSTS CONTROLLER routes================>
// //get one post
// router.get('/posts/:postId', postController.getOnePost);//MVP
// //get all posts
// router.get('/posts', postController.getAllPosts);//MVP
// //get posts by user
// router.get('/users/:userId/posts', postController.getPostsByUser); //MVP
// //get posts by tag
// router.get('/tags/:tagId/posts', postController.getPostsByTag);
// //create post
// router.post('/posts', postController.createPost);//MVP
// //update post
// router.put('/posts/:postId', postController.updatePost);
// //respond to post
// router.post('/posts/:postId', postController.respondToPost);

//POSTS CONTROLLER routes================>
router
  .route('/posts')
    .get(postController.getAllPosts) //MVP
    .post(postController.createPost) //MVP

router
  .route('/posts/:postId')
    .get(postController.getOnePost) //MVP
    .post(postController.respondToPost)
    .put(postController.updatePost)

router
  .route('/users/:userId/posts')
    .get(postController.getPostsByUser) //MVP

router
  .route('/tags/:tagId/posts')
    .get(postController.getPostsByTag)

// //FOLLOWS CONTROLLER routes================>
// //get followers for user
// router.get('/users/:userId/followers', followController.getFollowersForUser);//MVP
// //request follow
// router.post('/users/:userId/follows/:followId', followController.requestFollow);//MVP
// //accept follow
// router.put('/users/:userId/follows/:followId', followController.acceptFollow);
// //delete follow
// router.delete('/users/:userId/follows/:followId', followController.deleteFollow);
// //get followed by user
// router.get('/users/:userId/follows', followController.getFollowedByUser);

//FOLLOWS CONTROLLER routes================>
router
  .route('/users/:userId/follows')
    .get(followController.getFollowedByUser)

router
  .route('/users/:userId/followers')
    .get(followController.getFollowersForUser) //MVP

router
  .route('/users/:userId/follows/:followId')
    .post(followController.requestFollow) //MVP
    .put(followController.acceptFollow)
    .delete(followController.deleteFollow)

module.exports = router;
