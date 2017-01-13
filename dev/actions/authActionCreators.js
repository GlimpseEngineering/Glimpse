import axios from 'axios';

export const SHOW_LOCK = 'SHOW_LOCK';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const USER_CREATED = 'USER_CREATED';

import { generateCache, deleteCache } from './cacheActionCreators';

const lock = new Auth0Lock(
  '7YhgDoHIuZpKxGRa0A81rjDh1JuXd5vD',
  'glimpse.auth0.com'
)

function loginSuccess(profile, token) {
  return {
    type: LOGIN_SUCCESS,
    profile,
    token
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
  return dispatch => {
    lock.show((err, profile, token) => {
      if(err) {
        return dispatch(lockError(err));
      }
      console.log('auth0 profile:', profile)
      axios.post('/api/login', {
        authId: profile.user_id
      })
      .then(user => {
        console.log('user sent back from db:', user)
        localStorage.setItem('id_token', token)
        if(user.data) {
          localStorage.setItem('profile', JSON.stringify(user.data))
          generateCache(user.data.id)(dispatch);
          return dispatch(loginSuccess(user.data));
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
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    deleteCache()(dispatch);
    return dispatch(logoutSuccess());
  }
}

export function createNewUser(username, profPic, authId, bio, email, dob, gender, isPrivate) {
  return function(dispatch) {
    axios({
        method: 'POST',
        url: '/api/users',
        data: {
          username: username,
          profPic: profPic,
          authId: authId,
          bio: bio,
          email: email,
          dob: dob,
          gender: gender,
          private: isPrivate
        }
    })
    .then(response => {
      console.log('the response for creating user is:', response);
      localStorage.setItem('profile', JSON.stringify(response.data))
      return dispatch({type: 'USER_CREATED', profile: response.data});
    })
    .catch(err => {
      console.log('err in createNewUser is:', err);
    });
  }
}
