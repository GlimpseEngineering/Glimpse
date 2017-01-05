import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getOneUser, getAllUsers, dataFetched } from '../../actions/usersActionCreators';
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
    console.log('PROFILE PROPZ:',this.props)
    if(this.props.params.id) {
      this.getFeedData(this.props.params.id);
    } else if (this.props.activeUser) {
      this.getFeedData(this.props.activeUser.id);
    } else {
      this.getFeedData(1)
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.cache.cached && nextProps.cache.pending && this.props.getCachedUsers();
    if(nextProps.viewedProfile.id !== this.props.viewedProfile.id) {
      this.getFeedData(nextProps.viewedProfile.id)
    }
    if(nextProps.params.id !== this.props.params.id) {
      this.getFeedData(nextProps.params.id)
    }
    if(nextProps.requireDataFetch) {
      this.getFeedData(this.props.viewedProfile.id)
    }
  }

    getFeedData(id){
      this.props.getUserProfile(id)
      this.props.getUserListings();
      this.props.getUserFollowers(id);
      this.props.getUserFollows(id);
      this.props.getUserPosts(id);
      this.props.getAllUsersPosts();
      this.props.getUserFollowedPosts(id);
      this.props.dataFetched();
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
  dataFetched: dataFetched,
  getUserListings: getAllUsers ,
  getUserFollowers: getFollowersForUser,
  getUserFollows: getFollowedByUser,
  getUserPosts: getPostsByUser,
  getAllUsersPosts: getAllPosts,
  getUserFollowedPosts: getFollowedPosts,
  getCachedUsers: getCachedUsers
})(Profile);
export default dashboard;
