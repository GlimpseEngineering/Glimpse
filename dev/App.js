import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { enterVR } from './actions/vrModeCreators';
import { exitVR } from './actions/vrModeCreators';
import World from './components/scene/world';
import Profile from './components/dashboard/profile'

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {};
  }

  render() {
    console.log('state.vrMode:',this.props.vrMode)
    let displayMode = this.props.vrMode.active? <World /> : <Profile />
    return (
      <div >
        <button onClick={this.props.enterVR}>enter vr</button>
        <button onClick={this.props.exitVR}>exit vr</button>
        {displayMode}
       {this.props.children}
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
  // pass the result of selectBook to all reducers
  return bindActionCreators({
    enterVR: enterVR,
    exitVR: exitVR
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
