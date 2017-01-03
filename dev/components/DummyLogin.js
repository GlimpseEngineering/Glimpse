import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAs } from '../actions/authActionCreators';

class DummyLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: ""
    };
  }


  onInputChange(num) {
    this.setState({num});
    console.log(this.state)
  }

  render() {
    return ( 
    <div className="search-bar">
      <input 
        value={this.state.num}
        onChange={event => this.setState({num: event.target.value})}
      />
      <input type='submit' onClick={()=>{
        console.log("AAAYYYYYYY")
        this.props.loginAs(this.state.num)}}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  // pass the result of selectBook to all reducers
  return bindActionCreators({
    loginAs: loginAs,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DummyLogin);