const initialState = { cachedUsers: {} };

export default function(state = initialState, action) {
  switch(action.type){
  case 'CACHE_USERS':
    console.log('Here is our payload of cached users', action.payload);
    return Object.assign({},state,{
        cachedUsers: action.payload
      });
  default:
    return state;
  }
}
