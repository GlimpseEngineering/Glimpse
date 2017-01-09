import { EDIT_POST } from '../actions/postsActionCreators';

const initialState = {userPosts: []};

export default function(state = initialState, action) {
  switch (action.type) {
  case 'USER_POSTS':
    return Object.assign({},state,{
        userPosts: action.payload
      });
  case EDIT_POST:
    let copiedState = state.userPosts.slice();
    copiedState[action.payload.indexToEdit] =  action.payload.data;
    return Object.assign({}, state, {
      userPosts: copiedState
    });
  default:
    return state;
  }
  return state
};
