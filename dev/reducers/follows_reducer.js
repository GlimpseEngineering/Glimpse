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
      return Object.assign({},state,{
          userFollows: action.payload,
          loading: false
        });
    default:
      return state;
  }
  return state
}
