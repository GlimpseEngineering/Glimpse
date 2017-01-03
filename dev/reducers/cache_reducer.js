import { GENERATE_CACHE, GET_CACHED_USERS, DELETE_CACHE } from '../actions/cacheActionCreators.js';

const initialState = { cached: false, pending: true, cachedUsers: {} };

export default function(state = initialState, action) {
  switch (action.type) {
  case GENERATE_CACHE:
    return Object.assign({}, state, {
      cached: true
    });
  case GET_CACHED_USERS:
    return Object.assign({}, state, {
      cachedUsers: action.payload.data,
      pending: false
    });
  case DELETE_CACHE:
    return Object.assign({}, state, {
      cached: false,
      pending: true,
      cachedUsers: {}
    });
  default:
    return state;
  }
}
