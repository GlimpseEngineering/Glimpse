import { CREATE_POST, STAGE_ENTITY, DELETE_ENTITY, EDIT_ENTITY } from '../actions/postsActionCreators';

const INITIAL_STATE = { 
  createdPost: null,
  stagedEntity: null,
  entityToDeleteId: null,
  entityToEditId: null,
  editedEntity: null 
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
      entityToDeleteId: null,
      entityToEditId: null,
      editedEntity: null
    })
  case DELETE_ENTITY:
    return Object.assign({}, state, {
      entityToDeleteId: action.payload
    })
  case EDIT_ENTITY:
    return Object.assign({}, state, {
      entityToEditId: action.payload.id,
      editedEntity: action.payload
    })
  default:
    return state
  }
};
