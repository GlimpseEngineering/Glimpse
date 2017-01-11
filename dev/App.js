import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { enterVR } from './actions/vrModeActionCreators';
import { exitVR } from './actions/vrModeActionCreators';
import World from './components/scene/World';
import Profile from './components/dashboard/Profile';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {};

  }

  render() {
    // let children = null;
    // if (this.props.children) {
    //   children = React.cloneElement(this.props.children, {
    //     auth: this.props.route.auth //sends auth instance from route to children
    //   })
    // }
    console.log('state.vrMode:',this.props.vrMode)
    let displayMode = this.props.vrMode.active? <World /> : this.props.children;
    return (
      <div className="mainEverything">
        <button onClick={this.props.enterVR} className="top-hide">enter vr</button>
        <button onClick={this.props.exitVR} className="top-hide">exit vr</button>
        <button onClick={()=>{
          let scene = document.querySelector('#scene') ||
                      document.querySelector('#preview');
          let screenShot = scene.components.createPreview;
          console.log(scene.components.screenshot);
          console.log(screenShot);
          scene.components.createPreview.init();
          scene.components.createPreview.capture('perspective')
        }} className="top-hide">screenshot</button>
        {displayMode}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vrMode: state.vrMode
  }
}

// anything returned by mapDispatchToProps will end up
// as props on the App container.
// Allows this.props.enterVR to be called
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    enterVR: enterVR,
    exitVR: exitVR
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
