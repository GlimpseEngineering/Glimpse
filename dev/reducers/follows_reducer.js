const initialState = {
  userFollows: [],
  loading: false
};
export default function(state = initialState, action) {
  switch(action.type){
    case 'LOADING_USER_FOLLOWS':
      return Object.assign({},state,{
        loading: true
      });
    case 'USER_FOLLOWS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userFollows: action.payload,
          loading: false
        });
    default:
      return state;
  }
  return state
}
