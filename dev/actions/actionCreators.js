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
      console.log('the response for getting user listings is:', response);
      dispatch({type: 'USERS_LISTINGS', payload: response.data})
    });
  }
}

export function createNewUser(profPic, bio, username, email, dob, gender) {
  return function(dispatch) {
    axios({
        method: 'POST',
        url: '/api/users',
        data: {
          profPic: profPic,
          bio: bio,
          username: username,
          email: email,
          dob: dob,
          gender: gender
        }
    })
    .then(response => {
      console.log('the response for updating user is:', response);
      dispatch({type: 'USER_UPDATE', payload: response.data});
    })
    .catch(err => {
      console.log('err in createNewUser is:', err);
    });
  }
}

export function getOneUser(userId){
  return function(dispatch) {
    axios({
      method: 'GET',
      url: '/api/users/:userId'
    })
    .then(response => {
      console.log('the response for getting user is:', response);
      dispatch({type: 'GET_USER', payload: response.data});
    })
    .catch(err => {
      console.log('err in getOneUser is:', err);
    });
  }
}

export function updateUser(){}

export function getUsersWithTag(){}
