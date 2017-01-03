import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getOneUser  } from '../../actions/usersActionCreators';
import { getCachedUsers } from '../../actions/cacheActionCreators';
import User_Feeds from './User_Feeds';
import User_Info from './User_Info';

class Profile extends Component {

  constructor(props){
    super(props);
    this.props.cache.cached && this.props.getCachedUsers();
    if(this.props.params) {
      this.props.getUserProfile(this.props.params.id);
    } else if (this.props.activeUser) {
      this.props.getUserProfile(this.props.activeUser.id);
    } else {
      this.props.getUserProfile(0)
    }
  }

  componentDidMount() {
    // if (this.props.cache.cached === true) this.props.getCachedUsers();
    this.props.getCachedUsers();
  }

  render() {
    console.log('Here are our cached users', this.props.cache);
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
    cache: state.cache
  };
}

var dashboard = connect(mapStateToProps, {
  getUserProfile: getOneUser,
  getCachedUsers: getCachedUsers
})(Profile);
export default dashboard;
