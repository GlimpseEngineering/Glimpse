/*
reducer makes changes to the state based off what the action tells us to do
*/
import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import users from './users.js'

const rootReducer = combineReducers({
  users: users
});

export default rootReducer;
