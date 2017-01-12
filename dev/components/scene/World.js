import 'aframe';
import 'aframe-outline'
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import 'aframe-keyboard-controls';
import 'aframe-mouse-cursor-component';

import './acomps/create_preview';

import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScene, exitVR } from '../../actions/vrModeActionCreators';

import Camera from './primitives/Camera';
import PhotoSphere from './primitives/PhotoSphere';
import Text from './primitives/Text';
import UI from './primitives/UI';
import Plane from './primitives/Plane';
import Box from './primitives/Box';

const LOADING_SPINNER = 'http://res.cloudinary.com/glimpse/image/upload/v1484179580/wavy_mv9ykh.gif'

class World extends Component {
  constructor(props) {
    super(props);
    this.state={
      showFeed:'false',
      showUserPosts: 'false'
    }
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

  toggleFeed() {
    if (this.state.showFeed==='false') this.setState({showFeed:'true', showUserPosts: 'false'});
    else this.setState({showFeed:'false'});
  }

  toggleUserPosts() {
    if (this.state.showUserPosts==='false') this.setState({showUserPosts:'true', showFeed: 'false'});
    else this.setState({showUserPosts:'false'});
  }


  render() {
    console.log('curScene:',JSON.parse(this.props.currentScene))

    return (


      <Scene id='scene' createPreview > 
        <a-assets id='assets'>
          <img id="NO_ASSET" src={LOADING_SPINNER} />
        </a-assets>
        <Camera id='camera' >
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
          </a-cursor>
        </Camera>


        <UI className='ui' visible='false' zpos='-1' exit={this.props.exitVR} user={this.props.viewedProfile}
            feed={this.props.userFeed} viewedUserPosts={this.props.userPosts}
            showFeed={this.state.showFeed} showUserPosts={this.state.showUserPosts}
            toggleFeed={this.toggleFeed.bind(this)} toggleUserPosts={this.toggleUserPosts.bind(this)}
            setScene={this.props.setScene} currentScene={this.props.currentScene}/>


        {JSON.parse(this.props.currentScene)
          .map((entity, i) => {
            return this.createJSX(entity, i)
        })}

      </Scene>
    );
  }
}

function mapStateToProps(state) {
  // returns input state as props in output
  return {
    activeUser: state.auth.activeUser,
    viewedProfile: state.user.viewedProfile,
    cache: state.cache,
    currentScene: state.vrMode.currentScene,
    userFeed: state.userFeed,
    vrMode: state.vrMode,
    userPosts: state.userPosts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    exitVR: exitVR,
    setScene: setScene
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(World);


/**
//////////////////////////////////////////////
// What a scene's JSX would like like:
<PhotoSphere src="url(https://c6.staticflickr.com/3/2936/14749427013_c8fdbc4c76_z.jpg)"/>
<Text
  text='Hello World!'
  color='#DADADA'
  position='-1.75 1 -3'>
  <Text
    text='sup tho'
    color='#DADADA'
    position='-1 0 -5'/>
    position='0 -1 0'
  />
</Text>

<Entity light={{type: 'ambient', color: '#888'}}/>
<Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
<Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

///////////////////////////////////////////////
// What a scene would look like as an array:
[
  {
    primitive: "PhotoSphere",
    components: {
      src: "url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"
    },
    children: null
  },
  {
    primitive: "Text",
    components: {
      text: 'YOOOOO',
      color: '#DADADA',
      position: '-1.75 1 -3'
    },
  children: [{
      primitive: "Text",
      components: {
        text: 'sup',
        color: '#DADADA',
        position: '1 -1 0'
      },
      children: null
    }]
  },
  {
    primitive: "Entity",
    components: {
      light: {
        type: 'ambient',
        color: '#888'
      }
    },
    children: null
  },
  {
    primitive: "Entity",
    components: {
      light: {
        type: 'directional',
        intensity: 0.5
      },
      position: '-1 1 0'
    },
    children: null
  },
  {
    primitive: "Entity",
    components: {
      light: {
        type: 'directional',
        intensity: 1
      },
      position: '1 1 0'
    },
    children: null
  }
]

///////////////////////////////////////////////
// what a scene looks like on the database:

    '[{"primitive":"PhotoSphere","components":{'+
    '"src":"url(https://rawgit.com/aframevr/assets/'+
    'gh-pages/360-image-gallery-boilerplate/img/'+
    'sechelt.jpg)"},"children":null},{"primitive":'+
    '"Text","components":{"text":"YOOOOO","color":'+
    '"#DADADA","position":"-1.75 1 -3"},"children":'+
    '[{"primitive":"Text","components":{"text":"sup",'+
    '"color":"#DADADA","position":"1 -1 0"},"children":'+
    'null}]},{"primitive":"Entity","components":{"light":'+
    '{"type":"ambient","color":"#888"}},"children":null},'+
    '{"primitive":"Entity","components":{"light":{"type":'+
    '"directional","intensity":0.5},"position":"-1 1 0"},'+
    '"children":null},{"primitive":"Entity","components":'+
    '{"light":{"type":"directional","intensity":1},'+
    '"position":"1 1 0"},"children":null}]'

 */
