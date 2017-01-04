import { CLEAR_SEARCH, SEARCH_USERS, FOLLOW_FOUND_USER } from '../actions/searchActionCreators';

const INITIAL_STATE = { 
  foundUsers: { 
    users: {
      count: 0, 
      rows: {}
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
          rows: {}
        }, 
        followedByUser: {} 
      } 
    })
  case FOLLOW_FOUND_USER:
    console.log('Attempting to add new user to state', action.payload);
    return Object.assign({}, state, {
      foundUsers: {
        users: {
          count: state.foundUsers.users.count,
          rows: Object.assign({}, state.foundUsers.users.rows, {
            [action.payload.user.id]: action.payload.user
          })
        },
        followedByUser: Object.assign({}, state.foundUsers.followedByUser, {
          [action.payload.followedByUser.FollowId]: action.payload.followedByUser
        })
      }
    });
  default:
    return state
  }
};
