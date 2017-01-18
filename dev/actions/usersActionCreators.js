import axios from 'axios';
import { browserHistory } from 'react-router';

import { getPostsByUser, getAllPosts } from './postsActionCreators';
import { getFollowersForUser, getFollowedByUser, getFollowedPosts } from './followsActionCreators';

export function getAllUsers() {
  return function(dispatch) {
    axios.get('/api/users')
    .then(response => {
      dispatch({type: 'USERS_LISTINGS', payload: response.data})
    });
  }
}

export function getOneUser(userId){
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `/api/users/${userId}`
    })
    .then(response => {
      let user = response.data || {}
      browserHistory.push(`/#/profile/${response.data.id}`);
      dispatch({type: 'SET_USER_PROFILE', payload: user});
    })
    .catch(err => {
      console.error('err in getOneUser is:', err);
    });
  }
}

export function updateUser(userId, profile){
  return function(dispatch) {
    axios({
      method: 'PUT',
      url: `/api/users/${userId}`,
      data: profile
    })
    .then(response => {
      let user = response.data || {}
      dispatch({type: 'SET_USER_PROFILE', payload: user});
      dispatch({type: 'LOGIN_SUCCESS', profile: user})
    })
    .catch(err => {
      console.error('err in updateUser is:', err);
    });
  }
}

export function getUsersWithTag(){}
