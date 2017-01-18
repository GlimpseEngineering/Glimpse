import axios from 'axios';

export const ENTER_VR = "ENTER_VR";
export const EXIT_VR = "EXIT_VR";
export const SET_SCENE = "SET_SCENE";

export function enterVR() {
  return { type: ENTER_VR }
}

export function exitVR() {
  return { type: EXIT_VR }
}

export function setScene(scene) {
  return { type: SET_SCENE, payload: scene };
}