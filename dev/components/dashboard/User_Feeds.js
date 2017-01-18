import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import News_Feed from './feeds/News_Feed';
import Posts from './feeds/Posts';
import Following from './feeds/Following';
import Followers from './feeds/Followers';

class User_Feeds extends Component {
  constructor(props){
    super(props);
    this.state = {
      cacheFollowers: [],
      tab: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cacheFollowers.cached && !nextProps.cacheFollowers.pending){
      this.setState({ cacheFollowers: nextProps.cacheFollowers.cachedUsers })
    }
  }

  handleSelect(index, last) {
    this.setState({ tab: index });
  }

  render() {

    Tabs.setUseDefaultStyles(false);
    return (
      <div className="col-8 container">
        <div className="tab-wrap">
          <Tabs
            className="tab-panel"
            onSelect={this.handleSelect}
            selectedIndex={this.state.tab}
          >
            <TabList className="navBar">
              <Tab className="tab">Feed</Tab>
              <Tab className="tab">Posts</Tab>
              <Tab className="tab">Following</Tab>
              <Tab className="tab">Followers</Tab>
            </TabList>
              <TabPanel className='tab-view'>
                <News_Feed />
              </TabPanel>
              <TabPanel className='tab-view'>
                <Posts

                  user={this.props.viewedProfile}
                />
              </TabPanel>
              <TabPanel className='tab-view'>
                <Following />
              </TabPanel>
              <TabPanel className='tab-view'>
                <Followers />
              </TabPanel>
          </Tabs>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ auth, user, users, followers, follows, userPosts, allPosts, userFeed, newPost}){
  return {
    activeUser: auth.activeUser,
    viewedProfile: user.viewedProfile,
    users: users.userListings,
    followers: followers.userFollowers,
    follows: follows.userFollows,
    userPosts: userPosts.userPosts,
    allPosts: allPosts.allPosts,
    userFeed: userFeed.followingPosts,
    newPost: newPost.createdPost
  };
}

var feeds = connect(mapStateToProps, {
})(User_Feeds);
export default feeds;
