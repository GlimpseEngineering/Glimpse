import { ENTER_VR } from '../actions/vrModeCreators';
import { EXIT_VR } from '../actions/vrModeCreators';
import { SET_SCENE } from '../actions/vrModeCreators';


const initialState = {
  active: false,
  currentScene: '[{"primitive":"PhotoSphere","components":'+
                '{"src":"url(https://rawgit.com/aframevr/'+
                'assets/gh-pages/360-image-gallery-boilerplate'+
                '/img/sechelt.jpg)"},"children":null}]'
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
          currentScene: payload
        });
    default:
      return state;
  }
  return state
}
