import axios from 'axios';
let ENTER_VR = "ENTER_VR"

export function enterVR() {
  console.log('enterVR');
  dispatch( { type: ENTER_VR } )
}

export function exitVR() {
  console.log('exitV')
}

export function setScene() {

}