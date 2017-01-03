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
    if(this.props.params) {
      this.props.getUserProfile(this.props.params.id);
    } else if (this.props.activeUser) {
      this.props.getUserProfile(this.props.activeUser.id);
    } else {
      this.props.getUserProfile(0)
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.cache.cached && nextProps.cache.pending && this.props.getCachedUsers();
  }

  render() {
    console.log('Here are our cached users:', this.props.cache);
    return (
<<<<<<< HEAD

      <div key={this.props.cache.cached}>
=======
      <div >
>>>>>>> fc201b0dbbd39159536f772c8a7b5fb5b95f5b16
        <nav className="mainNav">
          <h3 className="glimpseLogo">Glimpse</h3>
          <div className="searchAndButtons">
            <SearchBar />
            <div className="navButtons">
<<<<<<< HEAD
=======

>>>>>>> fc201b0dbbd39159536f772c8a7b5fb5b95f5b16
              <Auth />
            </div>
          </div>


        </nav>

        <div className='row'>
           <User_Info user={this.props.viewedProfile}/>
           <User_Feeds user={this.props.viewedProfile}/>
        </div>
<<<<<<< HEAD

=======
>>>>>>> fc201b0dbbd39159536f772c8a7b5fb5b95f5b16
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
