import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const extraProps = AFRAME.utils.extend({}, props);


  return <Entity
    animation__rot={{property: 'rotation', dur: 10000, loop: true, to: '0 360 0'}}
    //animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true}}
    geometry={{
              primitive: 'sphere',
              radius: .3
            }} position="-1.55 0 .07" material={
              props.src.endsWith('webm') ?
              {shader: 'flat', src: props.previewUrl} :
              {shader: 'flat', src: props.src}
            }
    // material={{color: 'red', opacity: 0.6}}
    // material= {{src: "url(https://aframe.io/aframe/examples/boilerplate/panorama/puydesancy.jpg)"}}

  />
    // onClick={this.changeColor.bind(this)}>
    // <Entity
    //   animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
    //   geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2'
    //   material={{color: '#24CAFF'}}/>

};
