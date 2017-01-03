import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../actions/authActionCreators';
import { getOneUser  } from '../actions/usersActionCreators';
import User_Info from './dashboard/User_Info';


class Auth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('auth props:', this.props)
    return (

      <div className="auth">

        { !this.props.auth.isAuthenticated ? (
          <div >
            <button className="btn btn-primary" onClick={this.props.login}>Login</button>
          </div>
        ) : (
          <div>

            <button className="btn btn-primary" onClick={this.props.logout}>Logout</button>
            <button className="btn btn-primary"
                    onClick={()=>{
                      this.props.getOneUser(this.props.auth.activeUser.id)
                    }}>Home
            </button>
            <button className="btn-primary">Post</button>
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
    logout: logout,
    getOneUser: getOneUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
