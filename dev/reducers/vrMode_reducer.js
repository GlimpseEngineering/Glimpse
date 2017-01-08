import { ENTER_VR } from '../actions/vrModeActionCreators';
import { EXIT_VR } from '../actions/vrModeActionCreators';
import { SET_SCENE } from '../actions/vrModeActionCreators';
import { GET_ONE_POST } from '../actions/postsActionCreators'


const initialState = {
  active: false,
  currentScene: '[{"primitive":"PhotoSphere","components":{'+
                '"src":"url(https://s3-us-west-1.amazonaws.com/glimpse.profpics/IMG_6467.JPG)"},"children":null},{"primitive":'+
                '"Text","components":{"text":"YOOOOO","color":'+
                '"#DADADA","position":"-1.75 1 -3"},"children":'+
                '[{"primitive":"Text","components":{"text":"sup",'+
                '"color":"#DADADA","position":"1 -1 0"},"children":'+
                'null}]},{"primitive":"Entity","components":{"light":'+
                '{"type":"ambient","color":"#888"}},"children":null},'+
                '{"primitive":"Entity","components":{"light":{"type":'+
                '"directional","intensity":0.5},"position":"-1 1 0"},'+
                '"children":null},{"primitive":"Entity","components":'+
                '{"light":{"type":"directional","intensity":1},'+
                '"position":"1 1 0"},"children":null}]'
};

export default function(state = initialState, action) {
  switch(action.type){
    case ENTER_VR:
      console.log('assigning state.vrMode.active to', true);
      return Object.assign({},state,{
          active: true
        });
    case EXIT_VR:
      console.log('assigning state.vrMode.active to', false);
      return Object.assign({},state,{
          active: false
        });
    case SET_SCENE:
      console.log('assigning state.vrMode.currentScene to \n'+action.payload)
      return Object.assign({},state,{
          currentScene: action.payload
        });
    default:
      return state;
  }
  return state
}
