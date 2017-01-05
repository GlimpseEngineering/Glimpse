import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{
            primitive: 'plane',
            width: 1,
            height: 1

          }} {...props} />
);
