import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOneUser  } from '../../actions/usersActionCreators';
import User_Feeds from './User_Feeds';
import User_Info from './User_Info';

class Profile extends Component {
  constructor(props){
    super(props);
    this.props.getUserProfile(5);
  }
  render() {

    return (
      <div >
       <h1>Profile</h1>
       <div className='row'>
         <User_Info user={this.props.user}/>
         <User_Feeds user={this.props.user}/>
       </div>
      </div>
    );
  }
}

function mapStateToProps({ user }){
  return {
    user: user.userProfile
  };
}

var dashboard = connect(mapStateToProps, {
  getUserProfile: getOneUser
})(Profile);
export default dashboard;
