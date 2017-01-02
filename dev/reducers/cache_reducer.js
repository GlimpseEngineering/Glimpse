import { GENERATE_CACHE, GET_CACHED_USERS } from '../actions/cacheActionCreators.js';

const initialState = { cached: false, cachedUsers: {} };

export default function(state = initialState, action) {
  switch (action.type) {
  case GENERATE_CACHE:
    return Object.assign({}, state, {
      cached: true
    });
  case GET_CACHED_USERS:
    return Object.assign({}, state, {
      cachedUsers: action.payload.data
    });
  default:
    return state;
  }
}
