const initialState = { allPosts: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'ALL_POSTS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          allPosts: action.payload
        });
    default:
      return state;
  }
  return state
}
