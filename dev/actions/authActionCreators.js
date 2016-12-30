import axios from 'axios';
import { createNewUser } from './usersActionCreators'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

function logoutSuccess(profile) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function login() {
  const lock = new Auth0Lock('7YhgDoHIuZpKxGRa0A81rjDh1JuXd5vD', 'glimpse.auth0.com')
  return dispatch => {
    lock.show((error, profile, token) => {
      if(error) {
        return dispatch(loginError(error))
      }
      console.log('auth0 profile:',profile)
      axios.post('/api/login', {
        authId: profile.user_id
      })
      .then(user => {
        console.log('user sent back from db:', user)
        localStorage.setItem('id_token', token)
        if(user.data) {
          localStorage.setItem('profile', JSON.stringify(user.data))
          return dispatch(loginSuccess(user.data))
        } else {
          createNewUser(
            profile.nickname, 
            profile.picture, 
            profile.user_id, 
            "Loves VR", 
            profile.email || profile.link, 
            null, 
            profile.gender || null, 
            false
          )(dispatch)
        }
      })
    })
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  }
}