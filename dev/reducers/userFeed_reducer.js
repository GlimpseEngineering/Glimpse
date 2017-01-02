const initialState = { followingPosts: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USER_FEED':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          followingPosts: action.payload
        });
    default:
      return state;
  }
  return state
}
