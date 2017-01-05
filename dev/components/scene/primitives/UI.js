import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import Plane from './Plane';
import Text from './Text';
import Box from './Box';
import 'aframe-ui-modal-component';
import '../acomps/shift_click_ui'
import 'aframe-layout-component';
import 'aframe-bmfont-text-component';


class UI extends Component {
  constructor(props) {
    super(props)
    //console.log(props)
    this.state = {
      currSceneIndex: ''
    }
    this.checkNext = this.checkNext.bind(this);
    this.checkPrev = this.checkPrev.bind(this);
    }

    componentDidMount(){
      var sceneIndex;
      var self = this;
      this.props.feed.followingPosts.forEach(function(post, index){
        if(self.props.currentScene === post.content){
          sceneIndex = index;
        }
      });
      this.setState({ currSceneIndex: sceneIndex })
    }

    checkNext() {
      if(this.state.currSceneIndex === this.props.feed.followingPosts.length - 1){
        return 'false';
      }else {
        return 'true';
      }
    }

    checkPrev() {
      if(this.state.currSceneIndex === 0){
        return 'false';
      }else {
        return 'true';
      }
    }

    render() {
      var mat;
      return (
        <Entity shift-click-ui {...this.props}>
          <Entity layout="type: line; margin: 1.5" position="-2.25 -2 -1">
            <Text className="ui-element" text="<" visible={this.checkPrev()}
              onClick={()=>{

              this.props.setScene(this.props.feed.followingPosts[this.state.currSceneIndex - 1].content);
              this.setState({ currSceneIndex: this.state.currSceneIndex - 1 })
           }}/>
            <Entity className="ui-element" >

              <Box color="white" height="0.08" width="0.5" depth="0.08"
                   position="0 0 0" onClick={()=>{
                     this.props.toggleFeed()
                   }}/>
              <Box color="white" height="0.08" width="0.5" depth="0.08"
                   position="0 .2 0" onClick={()=>{
                     this.props.toggleFeed()
                   }}/>
              <Box color="white" height="0.08" width="0.5" depth="0.08"
                   position="0 .4 0" onClick={()=>{
                     this.props.toggleFeed()
                   }}/>
              <Entity className="vr-feed" visible={this.props.showFeed}
                      layout="line" rotation="0 0 90" margin="0.1">
                {this.props.feed.followingPosts.map(post=>{
                  return(

                    <Box color="white" height="0.85" width="2.7"
                         depth="0.08" rotation="0 0 -90" key={post.id}
                         onClick={()=>{
                           this.props.toggleFeed();
                           this.props.setScene(post.content);
                           console.log('inside of boxs')
                        }}>

                        <Entity bmfont-text={{text: `${post.description}; width: 500`}} position="-.5 -.02 .1" />
                        <Plane position="-1 0 .4" material={{src: `url(https://calderonsteven.github.io/panorama-vr/images/moonfase.jpg)`, side: "double"}} />
                    </Box>
                  )
                })}
              </Entity>
            </Entity>
            <Text className="ui-element" text="X" onClick={this.props.exit} />

            <Text className="ui-element" text=">" visible={this.checkNext()}
              onClick={()=>{
              // if(this.state.currSceneIndex === this.props.feed.followingPosts.length - 2){
              //   console.log('end of the line baby');
              //   this.setState({ showNext: 'false' })
              // }
              // if(this.state.currSceneIndex !== this.props.feed.followingPosts.length - 2){
              //   this.setState({ showNext: 'true' })
              // }
              this.props.setScene(this.props.feed.followingPosts[this.state.currSceneIndex + 1].content);
              this.setState({ currSceneIndex: this.state.currSceneIndex + 1 })
           }}
         />
          </Entity>
        </Entity>
      );
    }
}
export default UI;
//
// export default props => (
//   <Entity shift-click-ui {...props}>
//     <Entity layout="type: line; margin: 1.5" position="-2.25 -2 -1">
//       <Text className="ui-element" text="<" />
//       <Entity className="ui-element" >
//
//         <Box color="white" height="0.08" width="0.5" depth="0.08"
//              position="0 0 0" onClick={()=>{
//                props.toggleFeed()
//              }}/>
//         <Box color="white" height="0.08" width="0.5" depth="0.08"
//              position="0 .2 0" onClick={()=>{
//                props.toggleFeed()
//              }}/>
//         <Box color="white" height="0.08" width="0.5" depth="0.08"
//              position="0 .4 0" onClick={()=>{
//                props.toggleFeed()
//              }}/>
//         <Entity className="vr-feed" visible={props.showFeed}
//                 layout="line" rotation="0 0 90" margin="0.1">
//           {props.feed.followingPosts.map(post=>{
//             return(
//               <Box color="white" height="0.5" width="1.5"
//                    depth="0.08" rotation="0 0 -90" key={post.id}
//                    onClick={()=>{
//                      props.toggleFeed();
//                      props.setScene(post.content);
//                   }}/>
//             )
//           })}
//         </Entity>
//       </Entity>
//       <Text className="ui-element" text="X" onClick={props.exit} />
//       <Text className="ui-element" text=">" />
//     </Entity>
//   </Entity>
// );
