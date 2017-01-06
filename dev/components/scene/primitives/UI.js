import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import Plane from './Plane';
import Text from './Text';
import Box from './Box';
import 'aframe-ui-modal-component';
import '../acomps/shift_click_ui'
import 'aframe-layout-component';
import 'aframe-bmfont-text-component';
var moment = require('moment');




class UI extends Component {
  constructor(props) {
    super(props)
    //console.log(props)
    this.state = {
      currFeedSceneIndex: '',
      currUserPostsSceneIndex: '',
      currView: ''
    }
    this.checkNext = this.checkNext.bind(this);
    this.checkPrev = this.checkPrev.bind(this);
    }

    componentDidMount(){
      var sceneIndex;
      var self = this;
      this.props.viewedUserPosts.userPosts.forEach((post, index) => {
        if(post.content === self.props.currentScene){
          self.setState({ currUserPostsSceneIndex: index, currView: 'userPosts' });
        }
      })

      this.props.feed.followingPosts.forEach(function(post, index){
        if(self.props.currentScene === post.content){
          self.setState({ currFeedSceneIndex: index, currView: 'feed' })
        }
      });
    }

    updateUserPostsSceneIndex(index){
      if(this.state.currView === 'feed'){
        this.setState({ currUserPostsSceneIndex: index, currFeedSceneIndex: '', currView: 'userPosts' })
      }else {
          this.setState({ currUserPostsSceneIndex: index, currFeedSceneIndex: '' })
      }
    }

    updateFeedSceneIndex(index){
      if(this.state.currView === "userPosts"){
        this.setState({ currFeedSceneIndex: index, currUserPostsSceneIndex: '', currView: 'feed' });
      }else{
        this.setState({ currFeedSceneIndex: index, currUserPostsSceneIndex: '' });
      }
    }

    checkNext(view) {

      if(view){
        if(view === 'feed'){
          console.log('your current view is: ' + view);
          if(this.state.currFeedSceneIndex === this.props.feed.followingPosts.length - 1){
            return 'false';
          }else {
            return 'true';
          }
        }else {
          if(this.state.currUserPostsSceneIndex === this.props.viewedUserPosts.userPosts.length - 1){
            return 'false';
          }else {
            return 'true';
          }
        }
      }
      if(this.state.currFeedSceneIndex === this.props.feed.followingPosts.length - 1){
        return 'false';
      }else {
        return 'true';
      }
    }

    checkPrev() {
      if(this.state.currFeedSceneIndex === 0){
        return 'false';
      }else {
        return 'true';
      }
    }

    render() {
      // console.log('is user posts?', this.isUserPosts())
      return (
        <Entity shift-click-ui {...this.props}>
          <Entity layout="type: line; margin: 1.5" position="-2.25 -2 -1">
            <Text className="ui-element" text="<" visible={this.checkPrev()}
              onClick={()=>{

              this.props.setScene(this.props.feed.followingPosts[this.state.currFeedSceneIndex - 1].content);
              this.setState({ currFeedSceneIndex: this.state.currFeedSceneIndex - 1 })
           }}/>
            <Entity className="ui-element" onClick={()=>{
              this.props.toggleFeed()
            }}>

              <Box color="white" height="0.08" width="0.5" depth="0.08"
                   position="0 0 0" />
              <Box color="white" height="0.08" width="0.5" depth="0.08"
                   position="0 .2 0" />
              <Box color="white" height="0.08" width="0.5" depth="0.08"
                   position="0 .4 0" />
              {/* <Entity draw="background: #D7E8FF" textwrap="textAlign: center; x: 128; y: 128; text: Hello world!" position="1.17 0 .07" /> */}
              <Entity className="vr-feed" visible={this.props.showFeed}
                      layout="line" rotation="0 0 90" margin="0.1" position="1.5 1 0">

                {this.props.feed.followingPosts.map((post, index)=>{
                  var time = moment(post.createdAt).fromNow();
                  var text = post.description.length;
                  // var lineBreak = function(text){
                  //   console.log('this description is this long : ' + text)
                  // }
                  // lineBreak(text)
                  return(

                    <Box color="white" height="0.85" width="4"
                         depth="0.08" rotation="0 0 -90" key={post.id}
                         onClick={()=>{
                           this.updateFeedSceneIndex(index);
                           this.props.toggleFeed();
                           this.props.setScene(post.content);
                        }}>

                        <Entity bmfont-text={{text: `${post.description}; width: 400; align: left; `}} position="-1 0 .07" />

                        <Entity bmfont-text={{text: `${time}; width: 175; align: left`}} position="1.17 0 .07" />

                        <Plane position="-1.55 0 .07" material={{src: `url(https://calderonsteven.github.io/panorama-vr/images/moonfase.jpg)`, side: "double"}} />
                    </Box>
                  )
                })}
              </Entity>
            </Entity>
            <Text className="ui-element" text="X" onClick={this.props.exit} />

            <Entity className="ui-element" onClick={()=>{
              this.props.toggleUserPosts();

            }} >

              <Text text="U" />
              <Entity className="vr-feed" visible={this.props.showUserPosts}
                      layout="line" rotation="0 0 90" margin="0.1" position="-1.5 1 0">
                      {this.props.viewedUserPosts.userPosts.map((post, index)=>{
                        var time = moment(post.createdAt).fromNow();
                        // var text = post.description.length;
                        // var lineBreak = function(text){
                        //   console.log('this description is this long : ' + text)
                        // }
                        // lineBreak(text)
                        return(

                        <Box color="white" height="0.85" width="4"
                            depth="0.08" rotation="0 0 -90" key={post.id}
                            onClick={()=>{
                              this.updateUserPostsSceneIndex(index);
                              this.props.toggleUserPosts();
                              this.props.setScene(post.content);
                          }}>

                          <Entity bmfont-text={{text: `${post.description}; width: 400; align: left; `}} position="-1 0 .07" />

                          <Entity bmfont-text={{text: `${time}; width: 175; align: left`}} position="1.17 0 .07" />

                          <Plane position="-1.55 0 .07" material={{src: `url(https://calderonsteven.github.io/panorama-vr/images/moonfase.jpg)`, side: "double"}} />
                        </Box>
                        )
                      })}
              </Entity>
            </Entity>



            <Text className="ui-element" text=">"
              visible={

                  this.checkNext(this.state.currView)


              }
              onClick={()=>{
                if(this.state.currView === 'feed') {
                  this.props.setScene(this.props.feed.followingPosts[this.state.currFeedSceneIndex + 1].content);
                  this.setState({ currFeedSceneIndex: this.state.currFeedSceneIndex + 1 });
                }else{
                  this.props.setScene(this.props.viewedUserPosts.userPosts[this.state.currUserPostsSceneIndex + 1].content);
                  this.setState({ currUserPostsSceneIndex: this.state.currUserPostsSceneIndex + 1 });
                }

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
