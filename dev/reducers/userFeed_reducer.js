const initialState = {
  followingPosts: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type){
    case 'LOADING_USER_FEED':
      return Object.assign({},state,{
        loading: true
      })
    case 'USER_FEED':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          followingPosts: action.payload,
          loading: false
        });
    default:
      return state;
  }
  return state
}
