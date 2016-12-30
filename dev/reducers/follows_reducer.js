const initialState = { userFollows: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USER_FOLLOWS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userFollows: action.payload
        });
    default:
      return state;
  }
  return state
}
