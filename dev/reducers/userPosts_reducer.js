const initialState = { userPosts: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USER_POSTS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userPosts: action.payload
        });
    default:
      return state;
  }
  return state
}
