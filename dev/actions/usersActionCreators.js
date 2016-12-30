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
export function getAllUsers() {
  return function(dispatch) {
    axios.get('/api/users')
    .then(response => {
      console.log('the response for getting users listings is:', response.data);
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
      console.log('the response for getting one user is:', response.data);
      dispatch({type: 'USER_PROFILE', payload: response.data});
    })
    .catch(err => {
      console.log('err in getOneUser is:', err);
    });
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

export function updateUser(){}

export function getUsersWithTag(){}
