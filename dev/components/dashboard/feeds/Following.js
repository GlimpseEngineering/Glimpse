import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOneUser  } from '../../../actions/usersActionCreators';


class Following extends Component {



  render() {

    return (
      <div className="feed_content">
        <ul>
          {this.props.follows.map( user =>
            <li className='list-item'
                key={user.FollowId}
                value={user.FollowId}
                onClick = {e => {
                  console.log('you clicked on post id:', e.target.value)
                  this.props.getUserProfile(e.target.value)
                }
            }>
              User Id: {user.FollowId}
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
