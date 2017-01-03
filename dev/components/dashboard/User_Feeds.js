import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, dataFetched } from '../../actions/usersActionCreators';
import { getPostsByUser, getAllPosts } from '../../actions/postsActionCreators';
import { getFollowersForUser, getFollowedByUser, getFollowedPosts } from '../../actions/followsActionCreators';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import News_Feed from './feeds/News_Feed';
import Posts from './feeds/Posts';
import Following from './feeds/Following';
import Followers from './feeds/Followers';

class User_Feeds extends Component {
  constructor(props){
    super(props);
    console.log('XxXxXxXxXxXxX',this.props)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.requireDataFetch) {
      this.getFeedData(this.props.viewedProf.id)
    }
  }

  getFeedData(id){
    this.props.getUserListings();
    this.props.getUserFollowers(id);
    this.props.getUserFollows(id);
    this.props.getUserPosts(id);
    this.props.getAllUsersPosts();
    this.props.getUserFollowedPosts(id);
    this.props.dataFetched()
  }

  handleSelect(index, last) {
    //console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    Tabs.setUseDefaultStyles(false);
    return (
      <div className="col-8 container"> 
        <div className="tab-wrap">
          <Tabs
            onSelect={this.handleSelect}
            selectedIndex={0}
          >
            <TabList className="navBar">
              <Tab className="tab">Feed</Tab>
              <Tab className="tab">Posts</Tab>
              <Tab className="tab">Following</Tab>
              <Tab className="tab">Followers</Tab>
            </TabList>

            <TabPanel>
              <News_Feed userFeed={this.props.userFeed}/>
            </TabPanel>
            <TabPanel>
              <Posts
                userPosts={this.props.userPosts}
                user={this.props.user}
              />
            </TabPanel>
            <TabPanel>
              <Following follows={this.props.follows}/>
            </TabPanel>
            <TabPanel>
              <Followers followers={this.props.followers}/>
            </TabPanel>
          </Tabs>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ user, users, followers, follows, userPosts, allPosts, userFeed }){
  return {
    requireDataFetch: user.requireDataFetch,
    viewedProf: user.viewedProfile,
    users: users.userListings,
    followers: followers.userFollowers,
    follows: follows.userFollows,
    userPosts: userPosts.userPosts,
    allPosts: allPosts.allPosts,
    userFeed: userFeed.followingPosts
  };
}

var feeds = connect(mapStateToProps, {
  dataFetched: dataFetched,
  getUserListings: getAllUsers ,
  getUserFollowers: getFollowersForUser,
  getUserFollows: getFollowedByUser,
  getUserPosts: getPostsByUser,
  getAllUsersPosts: getAllPosts,
  getUserFollowedPosts: getFollowedPosts
})(User_Feeds);
export default feeds;
