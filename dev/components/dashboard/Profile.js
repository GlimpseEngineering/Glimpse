import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getOneUser  } from '../../actions/usersActionCreators';
import { getCachedUsers } from '../../actions/cacheActionCreators';
import User_Feeds from './User_Feeds';
import User_Info from './User_Info';

class Profile extends Component {

  constructor(props){
    super(props);
    if(this.props.params) {
      this.props.getUserProfile(this.props.params.id);
    } else if (this.props.activeUser) {
      this.props.getUserProfile(this.props.activeUser.id);
    } else {
      this.props.getUserProfile(0)
    }
  }

  componentDidMount() {
    this.props.getCachedUsers();
    console.log('Here are our props', this.props);
    console.log('Here are our cachedUsers', this.props.cachedUsers);
  }
  

  render() {
    return (
      <div >
       <h1>Profile</h1>
       <div className='row'>
         <User_Info user={this.props.viewedProfile}/>
         <User_Feeds user={this.props.viewedProfile}/>
       </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    activeUser: state.auth.activeUser,
    viewedProfile: state.user.viewedProfile,
    cachedUsers: state.cache.cachedUsers
  };
}

var dashboard = connect(mapStateToProps, {
  getUserProfile: getOneUser,
  getCachedUsers: getCachedUsers
})(Profile);
export default dashboard;
