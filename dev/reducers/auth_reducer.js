import { combineReducers } from 'redux'
import { LOGIN_SUCCESS } from '../actions/authActionCreators.js';
import { LOGIN_ERROR } from '../actions/authActionCreators.js';
import { LOGOUT_SUCCESS } from '../actions/authActionCreators.js';
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
  profile: getProfile(),
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('login success!')
      return Object.assign({}, state, {
        isAuthenticated: true,
        profile: action.profile,
        error: ''
      })
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null,
        error: action.error
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null
      })
    default:
      return state
    }
}