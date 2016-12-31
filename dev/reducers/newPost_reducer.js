import { CREATE_POST } from '../actions/postsActionCreators';

const INITIAL_STATE = { newPost: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_POST:
    return Object.assign({}, state, {
      newPost: action.payload
    })
  default:
    return state
  }
};