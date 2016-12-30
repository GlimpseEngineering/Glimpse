const initialState = { userFollowers: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USER_FOLLOWERS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userFollowers: action.payload
        });
    default:
      return state;
  }
  return state
}
