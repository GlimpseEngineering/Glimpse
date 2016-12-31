import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../actions/authActionCreators';
import User_Info from './dashboard/User_Info';

class Auth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('auth props:', this.props)
    return (
      <div style={{ marginTop: '10px' }}>
        { !this.props.auth.isAuthenticated ? (
          <ul className="list-inline">
            <li><button className="btn btn-primary" onClick={this.props.login}>Login</button></li>
          </ul>
        ) : (
          <div>
            <User_Info user={this.props.auth.activeUser}/>
            <br />
            <button className="btn btn-primary" onClick={this.props.logout}>Logout</button>
          </div>
        )}
      </div>
    )
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
    login: login,
    logout: logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
