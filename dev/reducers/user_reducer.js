
const initialState = { 
  viewedProfile: {},
};
export default function(state = initialState, action) {
  switch(action.type){
    case 'SET_USER_PROFILE':
      return Object.assign({},state,{
        viewedProfile: action.payload
      });
    default:
      return state;
  }
  return state
}
