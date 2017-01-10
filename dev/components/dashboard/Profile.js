import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { getOneUser, getAllUsers } from '../../actions/usersActionCreators';
import { getPostsByUser, getAllPosts } from '../../actions/postsActionCreators';
import { getFollowersForUser, getFollowedByUser, getFollowedPosts } from '../../actions/followsActionCreators';
import { getCachedUsers } from '../../actions/cacheActionCreators';
import User_Feeds from './User_Feeds';
import User_Info from './User_Info';
import Auth from "../Auth.js";
import SearchBar from "../search/SearchBar.js";

class Profile extends Component {

  constructor(props){
    super(props);
    if(this.props.viewedProfile.id) {
      this.getFeedData(this.props.viewedProfile.id);
    } else if (this.props.params.id){
      this.props.getUserProfile(this.props.params.id);
    } else if (this.props.activeUser) {
      this.getUserProfile(this.props.activeUser.id);
    } else {
      browserHistory.push(`/#/splash`)
      window.location.reload();
    }
    
  }

  componentWillReceiveProps(nextProps) {
    console.log('-----------')
    console.log('profile component will recieve props')
    console.log('old props:',this.props)
    console.log('new props:',nextProps)
    nextProps.cache.cached && nextProps.cache.pending && this.props.getCachedUsers();
    if(nextProps.viewedProfile.id !== this.props.viewedProfile.id) {
      console.log(`switched viewedProfile from ${this.props.viewedProfile.id} to ${nextProps.viewedProfile.id}`)
      this.getFeedData(nextProps.viewedProfile.id)
    }
    if(nextProps.params.id !== this.props.params.id) {
      console.log('new params, getting profile for user',nextProps.params.id)
      this.props.getUserProfile(nextProps.params.id)
    }
    console.log('-----------')
  }

    getFeedData(id){
      console.log('getting feed data for user',id)

      // this.props.getAllUsers();
      this.props.getFollowersForUser(id);
      this.props.getFollowedByUser(id);
      this.props.getFollowedPosts(id);
      // this.props.getAllPosts();
      this.props.getPostsByUser(id);
    }

  render() {
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
  getAllUsers: getAllUsers ,
  getFollowersForUser: getFollowersForUser,
  getFollowedByUser: getFollowedByUser,
  getPostsByUser: getPostsByUser,
  getAllPosts: getAllPosts,
  getFollowedPosts: getFollowedPosts,
  getCachedUsers: getCachedUsers
})(Profile);
export default dashboard;
