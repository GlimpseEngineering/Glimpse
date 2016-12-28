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
export function getFollowersForUser(userId) {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: `/api/users/${userId}/followers`
    })
    .then(response => {
      console.log('the response for getting one user is:', response.data);
      dispatch({type: 'USER_FOLLOWERS', payload: response.data});
    })
    .catch(err => {
      console.log('err in getOneUser is:', err);
    });
  }
}
