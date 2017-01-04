import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{
            primitive: 'box',
            width: props.width,
            height: props.height,
            depth: props.depth
          }}
          material={{color: props.color}}
          {...props} />
);