import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/actionCreators';

class Profile extends Component {
  constructor(props){
    super(props);
    this.props.getUserListings();
  }
  render() {

    return (
      <div >
       <h1>Profile</h1>

      </div>
    );
  }
}

function mapStateToProps({ users }){
  return { users: users.userListings };
}

export default connect(mapStateToProps, {getUserListings: getAllUsers })(Profile);
