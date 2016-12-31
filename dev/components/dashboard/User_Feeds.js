import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/usersActionCreators';
import { getPostsByUser, getAllPosts } from '../../actions/postsActionCreators';
import { getFollowersForUser, getFollowedByUser } from '../../actions/followsActionCreators';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import News_Feed from './feeds/News_Feed';
import Posts from './feeds/Posts';
import Following from './feeds/Following';
import Followers from './feeds/Followers';

class User_Feeds extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.getUserListings();
    this.props.getUserFollowers(3);
    this.props.getUserFollows(3);
    this.props.getUserPosts(3);
    this.props.getAllUsersPosts();


  }


  handleSelect(index, last) {
    //console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {

    //remove built in css from tabs
    Tabs.setUseDefaultStyles(false);
    return (
      <div className="col-6 container">
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
              <News_Feed
                allPosts={this.props.allPosts}
                users={this.props.users}
                follows={this.props.follows}
              />
            </TabPanel>
            <TabPanel>
              <Posts userPosts={this.props.userPosts}/>
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

function mapStateToProps({ users, followers, follows, userPosts, allPosts }){
  return {
    users: users.userListings,
    followers: followers.userFollowers,
    follows: follows.userFollows,
    userPosts: userPosts.userPosts,
    allPosts: allPosts.allPosts
  };
}

var feeds = connect(mapStateToProps, {
  getUserListings: getAllUsers ,
  getUserFollowers: getFollowersForUser,
  getUserFollows: getFollowedByUser,
  getUserPosts: getPostsByUser,
  getAllUsersPosts: getAllPosts
})(User_Feeds);
export default feeds;
