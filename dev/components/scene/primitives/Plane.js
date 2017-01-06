import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{
            primitive: 'plane',
            width: .8,
            height: .8

          }} {...props} />
);
