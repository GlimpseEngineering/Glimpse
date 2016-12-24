
const initialState = { userListing: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USERS_LISTINGS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userListings: action.payload
        });
    default:
      return state;
  }
  return state
}
