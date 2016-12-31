
const initialState = { viewedProfile: {} };
export default function(state = initialState, action) {
  switch(action.type){
    case 'SET_USER_PROFILE':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          viewedProfile: action.payload
        });
    default:
      return state;
  }
  return state
}
