import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOneUser  } from '../../../actions/usersActionCreators';

class Followers extends Component {



  render() {

    return this.props.followers.loading ? <h3>loading...</h3> : (
      <div className="feed_content">
        <ul>
          {this.props.followers.userFollowers.map( user =>
            <li className='list-item'
                key={user.UserId}
                value={user.UserId}
                onClick = {e => {
                  this.props.getUserProfile(user.UserId)
                }
            }>
              <div>
                <img className="userPic" src={user.userInfo.profPic} />
              </div>
              <div className='componentInfo'>
                <div className='description'>
                  <p>username: {user.userInfo.username}</p>
                  <p>Bio: {user.userInfo.bio}</p>
                </div>

              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // returns input state as props in output
  return {
    followers: state.followers
  };
}

function mapDispatchToProps(dispatch) {
  // pass the result of selectBook to all reducers
  return bindActionCreators({ getUserProfile: getOneUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Followers);
