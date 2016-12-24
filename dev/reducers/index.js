/*
reducer makes changes to the state based off what the action tells us to do
*/
import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import users from './users.js';
import vrMode from './vrMode_reducer.js'

const rootReducer = combineReducers({
  users: users,
  vrMode: vrMode
});

export default rootReducer;
