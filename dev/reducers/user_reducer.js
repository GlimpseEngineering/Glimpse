
const initialState = { 
  viewedProfile: {},
  requireDataFetch: false
};
export default function(state = initialState, action) {
  switch(action.type){
    case 'SET_USER_PROFILE':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
        viewedProfile: action.payload,
        requireDataFetch: true
      });
    case 'DATA_FETCHED':
      return Object.assign({}, state, {
        requireDataFetch: false
      });
    default:
      return state;
  }
  return state
}
