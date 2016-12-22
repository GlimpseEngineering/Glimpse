import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import Camera from './primatives/Camera';
import Sky from './primatives/Sky';
import Text from './primatives/Text';
import 'aframe-html-shader';

class World extends Component {
  render() {

    return (
      <Scene >
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
          </a-cursor>
        </Camera>
        <Sky src= "url(https://calderonsteven.github.io/panorama-vr/images/santorini.png)" />

        <Text
          text='yooooo'
          color='#DADADA'
          position='-1 0 -5'/>
        <Entity geometry="primitive:box;"  />
      </Scene>
    );
  }
}

export default World;
