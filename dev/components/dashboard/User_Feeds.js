import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/usersActionCreators';
import { getFollowersForUser } from '../../actions/followsActionCreators';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import News_Feed from './feeds/News_Feed';
import Posts from './feeds/Posts';
import Following from './feeds/Following';
import Followers from './feeds/Followers';

class User_Feeds extends Component {
  constructor(props){
    super(props);
    this.props.getUserListings();
    this.props.getUserFollowers(5);
  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    //remove built in css from tabs
    Tabs.setUseDefaultStyles(false);
    return (
      <div className="col-6">
        <div className="tab-wrap">
          <Tabs
            onSelect={this.handleSelect}
            selectedIndex={0}
          >

            <TabList className="navBar">
              <Tab className="tab">News Feed</Tab>
              <Tab className="tab">Posts</Tab>
              <Tab className="tab">Following</Tab>
              <Tab className="tab">Followers</Tab>
            </TabList>

            <TabPanel>
              <News_Feed />
            </TabPanel>
            <TabPanel>
              <Posts />
            </TabPanel>
            <TabPanel>
              <Following />
            </TabPanel>
            <TabPanel>
              <Followers />
            </TabPanel>
          </Tabs>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ users, followers }){
  return {
    users: users.userListings,
    followers: followers.userFollowers
  };
}

var feeds = connect(mapStateToProps, {
  getUserListings: getAllUsers ,
  getUserFollowers: getFollowersForUser
})(User_Feeds);
export default feeds;
