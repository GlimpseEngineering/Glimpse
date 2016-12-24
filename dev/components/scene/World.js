import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Camera from './primitives/Camera';
import PhotoSphere from './primitives/PhotoSphere';
import Text from './primitives/Text';
import 'aframe-html-shader';

class World extends Component {

  createJSX(entity, i) {
    let Tag =
      entity.primitive === 'PhotoSphere' ? PhotoSphere :
      enity.primitive === 'Text' ? Text :
      Entity;
    const comps = entity.components;
    const children = entity.children || [];
    return (
      <Tag key={i} {...comps}>
        { children.map((child, i) => this.createJSX(child, i)) }
      </Tag>
    )
  }

  render() {
    console.log('curScene:',JSON.parse(this.props.currentScene))
    return (
      <Scene >
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
          </a-cursor>
        </Camera>
        <Entity>
          {JSON.parse(this.props.currentScene)
            .map((entity, i) => {
              return this.createJSX(entity, i)
          })}
        </Entity>
      </Scene>
    );
  }
}

function mapStateToProps(state) {
  // returns input state as props in output
  return {
    currentScene: state.vrMode.currentScene
  };
}

export default connect(mapStateToProps)(World);

/*
  <PhotoSphere src= "url(https://calderonsteven.github.io/panorama-vr/images/santorini.png)" />

  <Text
    text='yooooo'
    color='#DADADA'
    position='-1 0 -5'/>
  <Entity geometry="primitive:box;"  />
 */
