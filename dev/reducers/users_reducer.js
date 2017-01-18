
const initialState = { userListings: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USERS_LISTINGS':
      return Object.assign({},state,{
          userListings: action.payload
        });
    default:
      return state;
  }
  return state
}
