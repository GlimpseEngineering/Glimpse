/*
-action are playload of information that send data from your application
to your store using store.dispatch()
-must have 'type' property
http://redux.js.org/docs/basics/Actions.html
*/

// import { push } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import axios from 'axios';
import { getFollowers, getFollows, getFeedPosts } from '../action_helpers/followsHelpers.js';

//USER ACTIONS ===========================>
export function getFollowersForUser(userId) {
  return function(dispatch) {
  dispatch({type:'LOADING_FOLLOWERS'})
  getFollowers(userId)
    .then(response => {
      dispatch({type: 'USER_FOLLOWERS', payload: response.data});
    })
    .catch(err => {
      console.error('err in getFollowersForUser is:', err);
    });
  }
}

export function getFollowedByUser(userId) {
  return function(dispatch) {
    dispatch({type:'LOADING_USER_FOLLOWS'})
    getFollows(userId)
    .then(response => {
      dispatch({type: 'USER_FOLLOWS', payload: response.data});
    })
    .catch(err => {
      console.error('err in getFollowedByUser is:', err);
    });
  }
}

export function getFollowedPosts(userId) {
  return function (dispatch) {
    dispatch({type:'LOADING_USER_FEED'})
    getFeedPosts(userId)
    .then(response => {
      dispatch({type: 'USER_FEED', payload: response});
    })
    .catch(err => {
      console.error('err in getFollowedPosts is:', err);
    });
  }
}
