const express = require('express');
const router = express.Router();
const userController = require('../db/user/UserController');
const postController = require('../db/post/PostController');
const followController = require('../db/follow/FollowController.js');
//USER CONTROLLER routes================>
//get one user
router.get('/users/:userId', userController.getOneUser);//MVP
//update user
router.put('/users/:userId', userController.updateUser);
//get all users
router.get('/users', userController.getAllUsers);//MVP
//create new user
router.post('/users', userController.createNewUser);//MVP
//get users with tag
router.get('/tags/:tagId/users', userController.getUsersWithTag);

//POSTS CONTROLLER routes================>
//get one post
router.get('/posts/:postId', postController.getOnePost);//MVP
//get all posts
router.get('/posts', postController.getAllPosts);//MVP
//get posts by user
router.get('/users/:userId/posts', postController.getPostsByUser); //MVP
//get posts by tag
router.get('/tags/:tagId/posts', postController.getPostsByTag);
//create post
router.post('/posts', postController.createPost);//MVP
//update post
router.put('/posts/:postId', postController.updatePost);
//respond to post
router.post('/posts/:postId', postController.respondToPost);

//FOLLOWS CONTROLLER routes================>
//get followers for user
router.get('/users/:userId/followers', followController.getFollowersForUser);//MVP
//request follow
router.post('/users/:userId/follows/:followId', followController.requestFollow);//MVP
//accept follow
router.put('/users/:userId/follows/:followId', followController.acceptFollow);
//delete follow
router.delete('/users/:userId/follows/:followId', followController.deleteFollow);
//get followed by user
router.get('/users/:userId/follows', followController.getFollowedByUser);

module.exports = router;
