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
  getFollowers(userId)
    .then(response => {
      console.log('the response for getting user followers is:', response.data);
      dispatch({type: 'USER_FOLLOWERS', payload: response.data});
    })
    .catch(err => {
      console.log('err in getFollowersForUser is:', err);
    });
  }
}

export function getFollowedByUser(userId) {
  return function(dispatch) {
    getFollows(userId)
    .then(response => {
      console.log('the response for getting follows: ', response.data);
      dispatch({type: 'USER_FOLLOWS', payload: response.data});
    })
    .catch(err => {
      console.log('err in getFollowedByUser is:', err);
    });
  }
}

export function getFollowedPosts(userId) {
  return function (dispatch) {
    getFeedPosts(userId)
    .then(response => {
      dispatch({type: 'USER_FEED', payload: response});
    })
    .catch(err => {
      console.log('err in getFollowedPosts is:', err);
    });
  }
}
