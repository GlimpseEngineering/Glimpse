
const initialState = { userProfile: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USER_PROFILE':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userProfile: action.payload
        });
    case 'USER_CREATED':
      console.log('user created reducer')
      return Object.assign({}, state, {
        isAuthenticated: true,
        profile: action.profile,
        error: ''
      });
    default:
      return state;
  }
  return state
}
