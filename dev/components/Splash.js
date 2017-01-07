import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from './Auth'
import SearchBar from "./search/SearchBar.js";

class Splash extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    let loggedIn = this.props.activeUser;
    let nextLogin = nextProps.activeUser
    if (nextLogin) {
      if (!loggedIn || loggedIn.id !== nextLogin.id){
        browserHistory.push(`/#/profile/${nextLogin.id}`)
        window.location.reload();   
      }
    }
<<<<<<< HEAD
    window.location.reload();
=======
    if (nextProps.params !== 'splash') {
      browserHistory.push(`/#/splash`)
    }
>>>>>>> [prog] skeleton and routing for splash screen
  }

  render(){
    return (
      <div>
        <nav className="mainNav">
          <h3 className="glimpseLogo">Glimpse</h3>
          <div className="searchAndButtons">
            <SearchBar />
            <div className="navButtons">
              <Auth />
            </div>
          </div>
        </nav>

        <h1>SPLASH PAGE, SON!</h1>
        <p><br/>
          click on a user in the followers or
          following tab to view that user's profile
        </p>
        <p><br/>
          click on a post in post in a user's 
          newsfeed or postfeed to view in vr
        </p>
        <p><br/>
          Shift+Click in VR to bring up the navigation menu
        </p>
        <p><br/>
          Click on the icons to navigate!
        </p><br/>
        <h3>Brought to you by Glimpse Engineering</h3>
        <p>Kevin Amirdjanian, Jimmy Gonzalez, Nathaniel T Hart</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
<<<<<<< HEAD
    activeUser: state.auth.activeUser,
    viewedProfile: state.user.viewedProfile
=======
    activeUser: state.auth.activeUser
>>>>>>> [prog] skeleton and routing for splash screen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)