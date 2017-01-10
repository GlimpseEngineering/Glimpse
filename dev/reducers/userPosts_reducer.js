import { EDIT_POST } from '../actions/postsActionCreators';

const initialState = {
  userPosts: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_FOLLOWED_POSTS':
      return Object.assign({},state,{
        loading: true
      })
    case 'USER_POSTS':
      return Object.assign({},state,{
          userPosts: action.payload,
          loading: false
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
