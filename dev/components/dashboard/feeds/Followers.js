import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOneUser  } from '../../../actions/usersActionCreators';

class Followers extends Component {



  render() {
    // if(this.props.followers){
    //   console.log(this.props.followers);
    // }

    return (
      <div className="feed_content">
        <ul>
          {this.props.followers.map( user =>
            <li className='list-item'
                key={user.UserId}
                value={user.UserId}
                onClick = {e => {
                  console.log('you clicked on post id:', user.UserId)
                  this.props.getUserProfile(user.UserId)
                }
            }>
              <div>
                <img src={user.userInfo.profPic} />
              </div>
              <p>username: {user.userInfo.username}</p>
              <p>Bio: {user.userInfo.bio}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(Followers);
