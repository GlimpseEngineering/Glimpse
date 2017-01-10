/*
-action are playload of information that send data from your application
to your store using store.dispatch()
-must have 'type' property
http://redux.js.org/docs/basics/Actions.html
*/

// import { push } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import axios from 'axios';
import superagent from 'superagent';
import { SET_SCENE, ENTER_VR } from './vrModeActionCreators';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/glimpse/image/upload'
const SCENE_PREVIEW = 'scene preview'

export const CREATE_POST = 'CREATE_POST';
export const PREVIEW_CREATED = 'PREVIEW_CREATED';
export const EDIT_POST = 'EDIT_POST';
export const STAGE_ENTITY = 'STAGE_ENTITY';
export const START_URL_LOAD = 'START_URL_LOAD';
export const END_URL_LOAD = 'END_URL_LOAD';
export const DELETE_ENTITY = 'DELETE_ENTITY';
export const EDIT_ENTITY = 'EDIT_ENTITY';

//USER ACTIONS ===========================>
export function getPostsByUser(userId) {
  return function(dispatch) {
    dispatch({type:'LOADING_POSTS_BY_USER'})
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

export function deletePost(postId) {
  console.log('hitting deletePost action creator:', postId)
  return function(dispatch) {
    axios({
      method: 'DELETE',
      url: `/api/posts/${postId}`
    })
    .then(response => {
      console.log('the response for deleteing the post is:', response.data);
      response.data.sort(function(a,b){
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      });
      dispatch({type: 'USER_POSTS', payload: response.data});
    })
  }
}

export function createPost(formValues) {
  const request = axios.post('/api/posts', formValues)
  // console.log('calling create post with these form values', formValues);

  return (dispatch) => {
    request.then((data) => {
      // console.log('data returned from creating post', data);
      dispatch({type: CREATE_POST, payload: data})
    });
  };
};

export function uploadPreview(blob) {
  superagent
    .post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', SCENE_PREVIEW)
    .field('file', blob)
    .end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      console.log(response.body.secure_url)
      dispatch({
        type: PREVIEW_CREATED, 
        payload: response.body.secure_url
      })
    }
  });     
}

export function editPost(formValues, postId, indexToEdit) {
  let editedData = {};
  const request = axios.put(`api/posts/${postId}`, formValues);


  return (dispatch) => {
    request.then((data) => {
      editedData.indexToEdit = indexToEdit;
      editedData.data = data.data;
      console.log('here is the edited data', editedData);
      dispatch({type: EDIT_POST, payload: editedData});
    });
  };
};

export function stageEntity(entity) {
  console.log('here is the entity in the action creator', entity);
  return (dispatch) => {
    dispatch({type: STAGE_ENTITY, payload: entity});
  };
};

export function deleteEntity(entityId) {
  return (dispatch) => {
    dispatch({type: DELETE_ENTITY, payload: entityId});
  };
};

export function editEntity(editedEntity) {
  return (dispatch) => {
    dispatch({type: EDIT_ENTITY, payload: editedEntity})
  };
};

export function startLoadUrl() {
  return (dispatch) => {
    dispatch({type: START_URL_LOAD});
  };
};

export function endLoadUrl() {
  return (dispatch) => {
    dispatch({type: END_URL_LOAD});
  };
};