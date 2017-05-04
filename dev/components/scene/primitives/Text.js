import {Entity} from 'aframe-react';
import React from 'react';
import 'aframe-text-geometry-component';

export default props => {
  const extraProps = AFRAME.utils.extend({}, props);
  delete extraProps.color;
  delete extraProps.text;

  return <Entity
    text-geometry={{value: props.text}} material={{color: props.color}}
    {...extraProps}/>
};