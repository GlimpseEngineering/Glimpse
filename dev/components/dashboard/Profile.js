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
    nextProps.cache.cached && nextProps.cache.pending && this.props.getCachedUsers();
    if(nextProps.viewedProfile.id !== this.props.viewedProfile.id) {
      this.getFeedData(nextProps.viewedProfile.id)
    }
    if(nextProps.params.id !== this.props.params.id) {
      this.props.getUserProfile(nextProps.params.id)
    }
    if (nextProps.newPost.createdPost !== this.props.newPost.createdPost) {
      nextProps.viewedProfile.id === nextProps.activeUser.id ?
        this.props.getPostsByUser(nextProps.activeUser.id) :
        this.props.getFollowedPosts(nextProps.viewedProfile.id)
    }
  }

    getFeedData(id){
      this.props.getFollowersForUser(id);
      this.props.getFollowedByUser(id);
      this.props.getFollowedPosts(id);
      this.props.getPostsByUser(id);
    }

  render() {
    return (
      <div key={this.props.cache.cached}>
        <nav className="mainNav">
          <div className="glimpseLogo">
            {/* <span className="glimpseLogo">

            </span> */}
            {/* <a href="https://github.com/GlimpseEngineering/Glimpse" /> */}
            {/* <i class="material-icons"></i> */}
            <h3 >Glimpse</h3>
          </div>

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
    cache: state.cache,
    newPost: state.newPost
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
  getCachedUsers: getCachedUsers,
})(Profile);
export default dashboard;
