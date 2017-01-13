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
    window.location.reload();

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
        <div className="mainShit">
          <article className="splash">
            <div className="col-2 sides">

            </div>
            <div className="col-8">
              {/* <h1 className="splashTitle">Glimpse Into Someone's World</h1> */}
              <div className="splashInfo">
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
                <div className="splashFooter">
                  <h3 >Brought to you by: </h3>
                  <br/>
                  <h3>Glimpse Engineering</h3>
                  <br/>
                  <p>Kevin Amirdjanian, Jimmy Gonzalez, Nathaniel T Hart</p>
                </div>

              </div>
            </div>

            <div className="col-2 sides">

            </div>

          </article>
        </div>



      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    activeUser: state.auth.activeUser,
    viewedProfile: state.user.viewedProfile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
