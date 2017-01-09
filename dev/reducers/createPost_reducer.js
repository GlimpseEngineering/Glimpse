import { CREATE_POST, PREVIEW_CREATED, STAGE_ENTITY, DELETE_ENTITY, EDIT_ENTITY } from '../actions/postsActionCreators';

const INITIAL_STATE = { 
  createdPost: null,
  stagedEntity: null,
  entityToDeleteId: null,
  entityToEditId: null,
  editedEntity: null,
  previewUrl: null 
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_POST:
    return Object.assign({}, state, {
      createdPost: action.payload,
      stagedEntity: null,
      entityToDeleteId: null,
      entityToEditId: null,
      editedEntity: null
    })
  case PREVIEW_CREATED:
    return Object.assign({}, state, {
      previewUrl: action.payload
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
      entityToDeleteId: action.payload,
      entityToEditId: null
    })
  case EDIT_ENTITY:
    return Object.assign({}, state, {
      entityToDeleteId: null,
      entityToEditId: action.payload.id,
      editedEntity: action.payload
    })
  default:
    return state
  }
};
