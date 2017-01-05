import { CREATE_POST, STAGE_ENTITY, DELETE_ENTITY } from '../actions/postsActionCreators';

const INITIAL_STATE = { 
  createdPost: null,
  stagedEntity: null,
  entityToDeleteId: null 
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_POST:
    return Object.assign({}, state, {
      createdPost: action.payload
    })
  case STAGE_ENTITY:
    return Object.assign({}, state, {
      stagedEntity: action.payload,
      entityToDeleteId: null 
    })
  case DELETE_ENTITY:
    return Object.assign({}, state, {
      entityToDeleteId: action.payload
    })
  default:
    return state
  }
};
