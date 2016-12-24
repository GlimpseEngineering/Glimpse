/*
reducer makes changes to the state based off what the action tells us to do
*/
import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import users_reducer from './users_reducer.js';
import user_reducer from './user_reducer.js';
import vrMode from './vrMode_reducer.js'

const rootReducer = combineReducers({
  users: users_reducer,
  user: user_reducer,
  vrMode: vrMode
});

export default rootReducer;
