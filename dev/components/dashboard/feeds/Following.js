import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOneUser  } from '../../../actions/usersActionCreators';


class Following extends Component {



  render() {
    console.log(this.props.follows);
    return (
      <div className="feed_content">
        <ul>
          {this.props.follows.map( user =>
            <li className='list-item'
                key={user.FollowId}
                value={user.FollowId}
                onClick = {e => {
                  console.log('you clicked on post id:', user.FollowId)
                  this.props.getUserProfile(user.FollowId)
                }
            }>
              <div>
                <img className="userPic" src={user.userInfo.profPic} />
              </div>
              <div className='componentInfo'>
                <p>username: {user.userInfo.username}</p>
                <p>Bio: {user.userInfo.bio}</p>
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
  return {};
}

function mapDispatchToProps(dispatch) {
  // pass the result of selectBook to all reducers
  return bindActionCreators({ getUserProfile: getOneUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Following);
