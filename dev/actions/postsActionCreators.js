/*
-action are playload of information that send data from your application
to your store using store.dispatch()
-must have 'type' property
http://redux.js.org/docs/basics/Actions.html
*/

// import { push } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import axios from 'axios';

//USER ACTIONS ===========================>
export function getPostsByUser(userId) {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `/api/users/${userId}/posts`
    })
    .then(response => {
      //console.log('the response for getting user posts:', response.data);
      dispatch({type: 'USER_POSTS', payload: response.data});
    })
    .catch(err => {
      console.log('err in getPostsByUser is:', err);
    });
  }
}

export function getAllPosts() {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `/api/posts`
    })
    .then(response => {
      //console.log('the response for getting all posts:', response.data);
      dispatch({type: 'ALL_POSTS', payload: response.data});
    })
    .catch(err => {
      console.log('err in getAllPosts is:', err);
    });
  }
}
