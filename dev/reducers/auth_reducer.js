import { combineReducers } from 'redux'
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, USER_CREATED } from '../actions/authActionCreators.js';
const jwtDecode = require('jwt-decode');

function checkTokenExpiry() {
  let jwt = localStorage.getItem('id_token')
  if(jwt) {
    let jwtExp = jwtDecode(jwt).exp;
    let expiryDate = new Date(0);
    expiryDate.setUTCSeconds(jwtExp);
    
    if(new Date() < expiryDate) {
      return true;
    }
  }
  return false;  
}

function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}

const initialState = {
  isAuthenticated: checkTokenExpiry(),
  activeUser: getProfile(),
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        activeUser: action.profile,
        error: ''
      })
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        activeUser: null,
        error: action.error
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        activeUser: null
      })
    case USER_CREATED:
      return Object.assign({}, state, {
        isAuthenticated: true,
        activeUser: action.profile,
        error: ''
      });
    default:
      return state
    }
}