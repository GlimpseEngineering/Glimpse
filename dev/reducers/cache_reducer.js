import { GET_USERS_CACHE } from '../actions/cacheActionCreators.js';

const initialState = { cachedUsers: {} };

export default function(state = initialState, action) {
  switch(action.type){
  case GET_USERS_CACHE:
    console.log('Here is our payload of cached users', action.payload);
    return Object.assign({},state,{
        cachedUsers: action.payload.data
      });
  default:
    return state;
  }
}
