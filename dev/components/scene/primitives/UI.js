import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import Plane from './Plane';
import Text from './Text';
import Box from './Box';
import Sphere from './SpherePreview';
import Svg from './svg';
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
      currView: '',
      userPostsPosition: -2
    }
    this.checkNext = this.checkNext.bind(this);
    this.checkPrev = this.checkPrev.bind(this);
    this.isFeedCurrent = this.isFeedCurrent.bind(this);
    this.isUserPostsCurrent = this.isUserPostsCurrent.bind(this);
    this.lineBreak = this.lineBreak.bind(this);
    this.isFeedCurrWidth = this.isFeedCurrWidth.bind(this);
    this.isPostsCurrWidth = this.isPostsCurrWidth.bind(this);
    this.displayFeedBelow = this.displayFeedBelow.bind(this);
    this.displayFeedAbove = this.displayFeedAbove.bind(this);
    this.displayPostsBelow = this.displayPostsBelow.bind(this);
    this.displayPostsAbove = this.displayPostsAbove.bind(this);
    this.createJSX = this.createJSX.bind(this);
    this.mainCompDisplay = this.mainCompDisplay.bind(this);
    this.feedPosition = this.feedPosition.bind(this);
    this.userPostsPosition = this.userPostsPosition.bind(this);
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

    checkPrev(view) {
      if(view === 'userPosts'){
        if(this.state.currUserPostsSceneIndex === 0){
          return 'false';
        }else {
          return 'true';
        }
      }


      if(view === 'feed' && this.state.currFeedSceneIndex === 0){
        return 'false';
      }else {
        return 'true';
      }
    }

    isFeedCurrent(index){
      if(index === this.state.currFeedSceneIndex){
        return '#6C6C6C';
      }else{
        return 'white';
      }
    }

    isUserPostsCurrent(index){
      if(index === this.state.currUserPostsSceneIndex){
        return '#6C6C6C';
      }else{
        return 'white';
      }
    }

    isFeedCurrWidth(index){
      if(index === this.state.currFeedSceneIndex){
        return 4.2;
      }else{
        return 4;
      }
    }

    isPostsCurrWidth(index){
      if(index === this.state.currUserPostsSceneIndex){
        return 4.2;
      }else{
        return 4;
      }
    }

    lineBreak(text){
        text = text.split(' ');
        var lineOne = '';
        var lineTwo = '';
        var lineThree = '';

        var count = 0;
        var result;
        var curr;
        for(var i = 0; i < text.length; i++){

          if(lineOne.length <= 21 && ((lineOne.length + text[i].length + 1) <= 21) && count <= 21 && (curr === undefined || curr === 'line1')){
            if(curr === undefined) {
              curr = 'line1';
              lineOne += (text[i] + ' ');
              count += (text[i].length + 1);
            }else if(curr === 'line1'){
              lineOne += (text[i] + ' ');
              count += (text[i].length + 1);
            }
          }else if(lineTwo.length <= 21 && ((lineTwo.length + text[i].length + 1) <= 21) && count < (count + 21) && (curr === 'line1' || curr === 'line2')) {
            if(curr === 'line1'){
              curr = 'line2';
              lineTwo += (text[i] + ' ');
              count += (text[i].length + 1);
            }else if(curr === 'line2') {
              lineTwo += (text[i] + ' ');
              count += (text[i].length + 1);
            }
          }else if(lineThree.length <= 18 && ((lineThree.length + text[i].length + 1) <= 18) && count <= (count + 17) && (curr === 'line2' || curr === 'line3')){
            if(curr === 'line2'){
              curr = 'line3'
              lineThree += (text[i] + ' ');
              count += (text[i].length + 1);
            }else if(curr === 'line3'){
              lineThree += (text[i] + ' ');
              count += (text[i].length + 1);
            }
          }else {
            if(curr === 'line3'){
              curr = 'done';
              var removeEnd = lineThree.slice(0, lineThree.length - 1);
              lineThree = removeEnd;
              var removeEndAgain = lineThree.slice(lineThree.length - 1);
              if(removeEndAgain === '.' || removeEndAgain === ','){
                lineThree = lineThree.slice(0, lineThree.length - 1);
                lineThree += "...";
              }else{
                lineThree += "...";
              }
            }
          }
        }
        var arrayOfLines = [lineOne, lineTwo, lineThree];

        result = [lineOne + '\n' + lineTwo + '\n' + lineThree, arrayOfLines];

        return result;
    }

    displayFeedBelow(index){
      var result = false;
      var feedLength = this.props.feed.followingPosts.length;
      if(this.state.currFeedSceneIndex >= (feedLength - 2)){
        console.log('in this bitch')
        if(index > this.state.currFeedSceneIndex - 4 && this.state.currFeedSceneIndex === (feedLength - 2)){
          console.log('in dis bitch')
          result = true;
        }
        if(index > this.state.currFeedSceneIndex - 5 && this.state.currFeedSceneIndex === (feedLength - 1)){
          console.log('in dis bitch')
          result = true;
        }
      }else{
        if(index < this.state.currFeedSceneIndex - 2){
          result = false;
        }else {
          result = true;
        }
      }

      // if(index < this.state.currUserPostsSceneIndex){
      //   return false;
      // }else {
      //   return true;
      // }

      return result;
    }

    displayFeedAbove(index){
      var result = false;
      if(this.state.currFeedSceneIndex < 2){
        if(index < this.state.currFeedSceneIndex + 4 && this.state.currFeedSceneIndex === 1){
          result = true;
        }
        if(index < this.state.currFeedSceneIndex + 5 && this.state.currFeedSceneIndex === 0){
          result = true;
        }
      }else{
        if(index < this.state.currFeedSceneIndex + 3){
          result = true;
        }
      }
      return result;
    }

    displayPostsBelow(index){
      // var result = false;
      // var feedLength = this.props.feed.followingPosts.length;
      // if(this.state.currFeedSceneIndex >= (feedLength - 2)){
      //
      //   if(index > this.state.currFeedSceneIndex - 3 && this.state.currFeedSceneIndex === (feedLength - 2)){
      //     console.log('in dis bitch')
      //     result = true;
      //   }
      //   if(index > this.state.currFeedSceneIndex - 4 && this.state.currFeedSceneIndex === (feedLength - 1)){
      //     console.log('in dis bitch')
      //     result = true;
      //   }
      // }else{
      //   if(index < this.state.currFeedSceneIndex){
      //     result = false;
      //   }else {
      //     result = true;
      //   }
      // }
      //
      // // if(index < this.state.currUserPostsSceneIndex){
      // //   return false;
      // // }else {
      // //   return true;
      // // }
      //
      // return result;
    }

    displayPostsAbove(index){
      if(index < this.state.currUserPostsSceneIndex + 5){
        return true;
      }else {
        return false;
      }
    }

    createJSX(entity, i) {
      let Tag =
        entity.primitive === 'PhotoSphere' ? Sphere :
        Entity;
      const comps = entity.components;
      const children = entity.children || [];
      return (
        <Tag key={i} {...comps}>
          { children.map((child, i) => this.createJSX(child, i)) }
        </Tag>
      )
    }

    mainCompDisplay() {
      if(this.props.showFeed === 'true' || this.props.showUserPosts === 'true'){
        console.log('showfeed')
        return 'true';
      }else {
        return 'false';
      }

    }

    feedPosition(){
      var feedLength = this.props.feed.followingPosts.length;
      var result = -(this.state.currFeedSceneIndex) + 3;
      if(this.state.currFeedSceneIndex < 2){
        if(this.state.currFeedSceneIndex === 0){
          result = -(this.state.currFeedSceneIndex) + 1;
        }else if(this.state.currFeedSceneIndex === 1){
          result = -(this.state.currFeedSceneIndex) + 2;
        }
      }else if(this.state.currFeedSceneIndex > feedLength - 3){
        if(this.state.currFeedSceneIndex === feedLength - 1){
          result = -(this.state.currFeedSceneIndex) + 5;
        }else if(this.state.currFeedSceneIndex === feedLength - 2){
          result = -(this.state.currFeedSceneIndex) + 4;
        }
      }
      return result;
    }

    userPostsPosition(){
      var UPLength = this.props.viewedUserPosts.userPosts.length;
      var result = -(this.state.currUserPostsSceneIndex) + 3;
      if(this.state.currUserPostsSceneIndex < 2){
        if(this.state.currUserPostsSceneIndex === 0){
          result = -(this.state.currUserPostsSceneIndex) + 1;
        }else if(this.state.currUserPostsSceneIndex === 1){
          result = -(this.state.currUserPostsSceneIndex) + 2;
        }
      }else if(this.state.currUserPostsSceneIndex > UPLength - 3){
        if(this.state.currUserPostsSceneIndex === UPLength - 1){
          result = -(this.state.currUserPostsSceneIndex) + 5;
        }else if(this.state.currUserPostsSceneIndex === UPLength - 2){
          result = -(this.state.currUserPostsSceneIndex) + 4;
        }
      }
      return result;
    }

    render() {
      // console.log('is user posts?', this.isUserPosts())
      return (
        <Entity shift-click-ui {...this.props}>
          <Box  height="6" width='7.2' position='-.2 1.4 -3'
               depth="0.01" rotation="0 0 -90" visible={this.mainCompDisplay()}
               material={`opacity: .2; color: white`}
             />
          <Entity layout="type: line; margin: 1.3" position="-2.8 -2 0">
            {/* <Entity
              // geometry="primitive: plane"
              material={{src: 'Svg'}}
            /> */}


            <Text className="ui-element" text="<" visible={this.checkPrev(this.state.currView)}
              onClick={()=>{
                if(this.state.currView === 'feed') {
                  this.props.setScene(this.props.feed.followingPosts[this.state.currFeedSceneIndex - 1].content);
                  this.setState({ currFeedSceneIndex: this.state.currFeedSceneIndex - 1 })
                }else{
                  this.props.setScene(this.props.viewedUserPosts.userPosts[this.state.currUserPostsSceneIndex - 1].content);
                  this.setState({ currUserPostsSceneIndex: this.state.currUserPostsSceneIndex - 1 });
                }


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
                      layout="line" rotation="0 0 90" margin="0.1" position={`1.35 ${ this.feedPosition() } -1`}>

                {this.props.feed.followingPosts.map((post, index)=>{
                  var time = moment(post.createdAt).fromNow();
                  // var text = post.description.length;
                  var text = post.description;
                  var description = this.lineBreak(text);
                  function textPosition(array){

                    var result;
                    if(array[2].length !== 0){
                      result = "-1 -0.2 .07"

                    }else if(array[2].length === 0 && array[1].length !== 0){
                      result = "-1 0 .07";

                    }else{
                      result = "-1 0.2 .07";
                    }
                    return result;
                  }
                  var position = textPosition(description[1])

                  var feedBelow = this.displayFeedBelow(index);
                  var feedAbove = this.displayFeedAbove(index);
                  var displayMode = function(i){

                    if(feedBelow && feedAbove){
                      return 'true';
                    }else{
                      return 'false';
                    }
                  }
                  return(

                    <Box  height="0.85" width={this.isFeedCurrWidth(index)}
                         depth="0.05" rotation="0 0 -90" key={post.id}
                         visible={displayMode(index)}
                         material={`opacity: .25; color:${this.isFeedCurrent(index)}`}

                         onClick={()=>{
                           this.updateFeedSceneIndex(index);
                           this.props.toggleFeed();
                           this.props.setScene(post.content);
                        }}>

                        <Entity bmfont-text={{text: `${description[0]}; width: 400; align: left; `}} position={position} />

                        <Entity bmfont-text={{text: `${time}; width: 175; align: left`}} position="1.17 0 .07" />

                        {JSON.parse(post.content)
                          .map((entity, i) => {
                            return this.createJSX(entity, i)
                        })}
                        {/* <Plane position="-1.55 0 .07" material={{src: `url(https://calderonsteven.github.io/panorama-vr/images/moonfase.jpg)`, side: "double"}} /> */}
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
                      layout="line" rotation="0 0 90" margin="0.1" position={`-1.25 ${ this.userPostsPosition() } -1`}>
                      {this.props.viewedUserPosts.userPosts.map((post, index)=>{
                        var time = moment(post.createdAt).fromNow();
                        // console.log('curScene:', this.createJSX(JSON.parse(post.content)));
                        // console.log('curScene:',JSON.parse(post.content))
                        //var content = this.createJSX(JSON.parse(post.content));
                        //text display algorithm=========>>>>>>>
                        var text = post.description;
                        var description = this.lineBreak(text);
                        function textPosition(array){

                          var result;
                          if(array[2].length !== 0){
                            result = "-1 -0.2 .07"

                          }else if(array[2].length === 0 && array[1].length !== 0){
                            result = "-1 0 .07";

                          }else{
                            result = "-1 0.2 .07";
                          }
                          return result;
                        }
                        var position = textPosition(description[1])
                        //=========>>>>>>>
                        return(

                          <Box height="0.85" width={this.isPostsCurrWidth(index)}
                              depth="0.05" rotation="0 0 -90" key={post.id}
                              material={`opacity: .25; color:${this.isUserPostsCurrent(index)}`}
                              // color={this.isUserPostsCurrent(index)}
                              onClick={()=>{
                                this.updateUserPostsSceneIndex(index);
                                this.props.toggleUserPosts();
                                this.props.setScene(post.content);
                            }}>

                            <Entity bmfont-text={{text: `${description[0]}; width: 470; align: left; `}} position={position} />

                            <Entity bmfont-text={{text: `${time}; width: 175; align: left`}} position="1.17 0 .07" />


                            {JSON.parse(post.content)
                              .map((entity, i) => {
                                return this.createJSX(entity, i)
                            })}
                            {/* <Sphere geometry={{
                                      primitive: 'sphere',
                                      radius: .3
                                    }} position="-1.55 0 .07" material={{ src: `url(https://calderonsteven.github.io/panorama-vr/images/moonfase.jpg)`, side: "double"}} /> */}
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
