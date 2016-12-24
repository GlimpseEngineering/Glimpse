import axios from 'axios';

export const ENTER_VR = "ENTER_VR";
export const EXIT_VR = "EXIT_VR";
export const SET_SCENE = "SET_SCENE";

export function enterVR() {
  console.log('dispatching ENTER_VR');
  return { type: ENTER_VR }
}

export function exitVR() {
  console.log('dispatching EXIT_VR');
  return { type: EXIT_VR }
}

export function setScene(scene) {
  console.log('dispatching SET_SCENE:\n'+scene);
  return { type: SET_SCENE, payload: scene };
}