import { EDIT_POST } from '../actions/postsActionCreators';

const initialState = { userPosts: []};
export default function(state = initialState, action) {
  switch(action.type){
    case 'USER_POSTS':
      // console.log('payload for get users listings is', action.payload);
      return Object.assign({},state,{
          userPosts: action.payload
        });
    /**
     * here need to get the index to edit off the payload
     * make a copy of state
     * find the index and update the information in state
     * send back copied state with the new information
     */
    default:
      return state;
  }
  return state
}
