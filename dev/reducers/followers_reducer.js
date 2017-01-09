const initialState = { 
  userFollowers: [],
  loading: false
};
export default function(state = initialState, action) {
  switch(action.type){
    case 'LOADING_FOLLOWERS':
      return Object.assign({},state,{
        loading: true
      });
    case 'USER_FOLLOWERS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userFollowers: action.payload,
          loading: false
        });
    default:
      return state;
  }
  return state
}
