import { CLEAR_SEARCH, SEARCH_USERS } from '../actions/searchActionCreators';

const INITIAL_STATE = { 
  foundUsers: { 
    users: {
      count: 0, 
      rows: []
    }, 
    followedByUser: {} 
  } 
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEARCH_USERS:
    console.log('Here is our search for users entering the reducer', action.payload);
    return Object.assign({}, state, {
      foundUsers: action.payload
    })
  case CLEAR_SEARCH:
    return Object.assign({}, state, {
      foundUsers: { 
        users: {
          count: 0, 
          rows: []
        }, 
        followedByUser: {} 
      } 
    })
  default:
    return state
  }
};
