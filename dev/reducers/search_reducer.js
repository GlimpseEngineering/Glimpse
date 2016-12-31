import { SEARCH_USERS } from '../actions/searchActionCreators';

const INITIAL_STATE = { foundUsers: {count: 0, rows: []} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEARCH_USERS:
    console.log('In the reducer with the search payload:', action.payload);
    return Object.assign({}, state, {
      foundUsers: action.payload
    })
  default:
    return state
  }
};
