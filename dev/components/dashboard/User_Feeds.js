import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/usersActionCreators';

class User_Feeds extends Component {
  constructor(props){
    super(props);
    this.props.getUserListings();
    // this.props.getUserProfile(1);
  }
  render() {

    return (
      <div >
       <h2>Feeds</h2>

      </div>
    );
  }
}

function mapStateToProps({ users, user }){
  return {
    users: users.userListings,
    // user: user.userProfile
  };
}

var feeds = connect(mapStateToProps, {
  getUserListings: getAllUsers ,
  // getUserProfile: getOneUser
})(User_Feeds);
export default feeds;
