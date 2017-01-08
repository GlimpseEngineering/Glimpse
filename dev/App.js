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
      <div >
        <button onClick={this.props.enterVR}>enter vr</button>
        <button onClick={this.props.exitVR}>exit vr</button>      
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
