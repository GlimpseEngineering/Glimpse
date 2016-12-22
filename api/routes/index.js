const express = require('express');
const router = express.Router();
const userController = require('../user/UserController');
const tagController = require('../tag/TagController');
const postController = require('../post/PostController');
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
router.get('/posts/:postId', TODO);//MVP
//get all posts
router.get('/posts', TODO);//MVP
//get posts by user
router.get('/users/:userId/posts', TODO); //MVP
//get posts by tag
router.get('/tags/:tagId/posts', TODO);
//create post
router.post('/posts', TODO);//MVP
//update post
router.put('/posts/:postId', TODO);
//respond to post
router.post('/posts/:postId', TODO);

//FOLLOWS CONTROLLER routes================>
//get followers for user
router.get('/users/:userId/followers', TODO);//MVP
//request follow
router.post('/users/:userId/follows', TODO);//MVP
//accept follow
router.put('/users/:userId/follows/:followId', TODO);
//delete follow
router.delete('/users/:userId/follows/:followId', TODO);
//get followed by user
router.get('/users/:userId/follows');

module.exports = router;
