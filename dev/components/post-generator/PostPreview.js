import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import 'aframe-keyboard-controls';
import 'aframe-mouse-cursor-component';

import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';

import Camera from '../scene/primitives/Camera';
import PhotoSphere from '../scene/primitives/PhotoSphere';
import Text from '../scene/primitives/Text';
import UI from '../scene/primitives/UI';
import Plane from '../scene/primitives/Plane';
import Box from '../scene/primitives/Box';

export default class World extends Component {
  constructor(props) {
    super(props);
  }

  createJSX(entity, i) {
    let Tag =
      entity.primitive === 'PhotoSphere' ? PhotoSphere :
      entity.primitive === 'Text' ? Text :
      entity.primitive === 'Plane' ? Plane :
      entity.primitive === 'Box' ? Box :
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
    return (
      <div className="col-8">
        <Scene>

          <Camera>
            <a-cursor
              animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
            </a-cursor>
          </Camera>

          {JSON.parse(this.props.currentScene)
            .map((entity, i) => {
              return this.createJSX(entity, i)
          })}

        </Scene>
      </div>
    );
  }
};