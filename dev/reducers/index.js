import { combineReducers } from 'redux';
import users_reducer from './users_reducer.js';
import user_reducer from './user_reducer.js';

import auth from './auth_reducer.js';

import userPosts_reducer from './userPosts_reducer.js';
import allPosts_reducer from './allPosts_reducer.js';
import followers_reducer from './followers_reducer.js';
import follows_reducer from './follows_reducer.js';
import vrMode from './vrMode_reducer.js';
import search_reducer from './search_reducer.js';
import userFeed_reducer from './userFeed_reducer.js';
import cache_reducer from './cache_reducer.js';
import createPost_reducer from './createPost_reducer.js';

const rootReducer = combineReducers({
  users: users_reducer,
  user: user_reducer,
  vrMode: vrMode,
  auth: auth,
  followers: followers_reducer,
  follows: follows_reducer,
  userPosts: userPosts_reducer,
  allPosts: allPosts_reducer,
  search: search_reducer,
  userFeed: userFeed_reducer,
  cache: cache_reducer,
  newPost: createPost_reducer
});

export default rootReducer;
