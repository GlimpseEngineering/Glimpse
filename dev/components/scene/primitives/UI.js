import React from 'react';
import {Entity} from 'aframe-react';
import Plane from './Plane';
import Text from './Text';
import Box from './Box';
import 'aframe-ui-modal-component';
import '../acomps/shift_click_ui'
import 'aframe-layout-component';

export default props => (
  <Entity shift-click-ui {...props}>
    <Entity layout="type: line; margin: 1.5" position="-2.25 -2 -1">
      <Text className="ui-element" text="<" />
      <Entity className="ui-element" >
        <Box color="white" height="0.08" width="0.5" depth="0.08" 
             position="0 0 0" onClick={()=>{
               props.toggleFeed()
             }}/>
        <Box color="white" height="0.08" width="0.5" depth="0.08" 
             position="0 .2 0" onClick={()=>{
               props.toggleFeed()
             }}/>
        <Box color="white" height="0.08" width="0.5" depth="0.08"
             position="0 .4 0" onClick={()=>{
               props.toggleFeed()
             }}/>
        <Entity className="vr-feed" visible={props.showFeed}
                layout="line" rotation="0 0 90" margin="0.1">
          {props.feed.followingPosts.map(post=>{
            return(
              <Box color="white" height="0.5" width="1.5"
                   depth="0.08" rotation="0 0 -90" key={post.id}
                   onClick={()=>{
                     props.toggleFeed();
                     props.setScene(post.content);
                  }}/>
            )
          })}
        </Entity>
      </Entity>
      <Text className="ui-element" text="X" onClick={props.exit} />
      <Text className="ui-element" text=">" />
    </Entity>
  </Entity>
);

