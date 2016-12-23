
const initialState = { userProfile: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USER_PROFILE':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userProfile: action.payload
        });
    default:
      return state;
  }
  return state
}
