import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getOneUser  } from '../../actions/usersActionCreators';
import { getCachedUsers } from '../../actions/cacheActionCreators';
import User_Feeds from './User_Feeds';
import User_Info from './User_Info';
import Auth from "../Auth.js";
import SearchBar from "../search/SearchBar.js";

class Profile extends Component {

  constructor(props){
    super(props);

    if(this.props.params.id) {
      this.props.getUserProfile(this.props.params.id);
    } else if (this.props.activeUser) {
      this.props.getUserProfile(this.props.activeUser.id);
    } else {
      this.props.getUserProfile(1)
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.cache.cached && nextProps.cache.pending && this.props.getCachedUsers();
    if(nextProps.viewedProfile.id !== this.props.viewedProfile.id) {
      this.props.getUserProfile(nextProps.viewedProfile.id)
    }
    if(nextProps.params.id !== this.props.params.id) {
      this.props.getUserProfile(nextProps.params.id)
    }
  }

  render() {
    console.log('Here are our cached users:', this.props.cache);
    return (
      <div key={this.props.cache.cached}>
        <nav className="mainNav">
          <h3 className="glimpseLogo">Glimpse</h3>
          <div className="searchAndButtons">
            <SearchBar />
            <div className="navButtons">
              <Auth />
            </div>
          </div>
        </nav>
        <div className='row'>
           <User_Info />
           <User_Feeds cacheFollowers={this.props.cache} />
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
