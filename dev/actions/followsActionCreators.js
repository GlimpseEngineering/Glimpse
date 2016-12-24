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
export function getFollowersForUser() {
  return function(dispatch) {
    axios.get('/api/users/:userId/followers')
    .then(response => {

    });
  }
}
