/*
-action are playload of information that send data from your application
to your store using store.dispatch()
-must have 'type' property
http://redux.js.org/docs/basics/Actions.html
*/

// import { push } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import axios from 'axios';
import { SET_SCENE, ENTER_VR } from './vrModeActionCreators';

export const CREATE_POST = 'CREATE_POST';

//USER ACTIONS ===========================>
export function getPostsByUser(userId) {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `/api/users/${userId}/posts`
    })
    .then(response => {
      console.log('the response for getting user posts:', response.data);
      response.data.sort(function(a,b){
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      });
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

export function getOnePost(postId) {
  console.log('hitting getOnePost action creator', postId)
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `/api/posts/${postId}`
    })
    .then(response => {
      console.log('the response for getting one post:', response.data);
      dispatch({type: SET_SCENE, payload: response.data.content});
      dispatch({type: ENTER_VR})
    })
    .catch(err => {
      console.log('err in getOnePost is:', err);
    });
  }
}

export function createPost(formValues) {
  const request = axios.post('/api/posts', formValues)

  return (dispatch) => {
    request.then((data) => {
      dispatch({type: CREATE_POST, payload: data})
    });
  };
};
