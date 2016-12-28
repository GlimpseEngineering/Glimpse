import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/usersActionCreators';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Posts from './feeds/Posts';

class User_Feeds extends Component {
  constructor(props){
    super(props);

    this.props.getUserListings();

  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    Tabs.setUseDefaultStyles(false);
    return (
      <div className="col-6">
        <div className="tab-wrap">
          <Tabs
            onSelect={this.handleSelect}
            selectedIndex={2}
          >

            <TabList className="navBar">
              <Tab className="tab">News Feed</Tab>
              <Tab className="tab">Posts</Tab>
              <Tab className="tab">Following</Tab>
              <Tab className="tab">Followers</Tab>
            </TabList>

            <TabPanel name="tabs">
              <h2>News Feed</h2>
            </TabPanel>
            <TabPanel>
              <Posts />
            </TabPanel>
            <TabPanel>
              <h2>Following</h2>
            </TabPanel>
            <TabPanel>
              <h2>Follers</h2>
            </TabPanel>
          </Tabs>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ users, user }){
  return {
    users: users.userListings,
    // user: user.userProfile
  };
}

var feeds = connect(mapStateToProps, {
  getUserListings: getAllUsers ,
  // getUserProfile: getOneUser
})(User_Feeds);
export default feeds;
