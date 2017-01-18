const initialState = { allPosts: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'ALL_POSTS':
      return Object.assign({},state,{
          allPosts: action.payload
        });
    default:
      return state;
  }
  return state
}
