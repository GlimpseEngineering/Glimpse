import React, { Component } from 'react';


class Following extends Component {



  render() {

    return (
      <div className="feed_content">
        <ul>
          {this.props.follows.map( user =>
            <li key={user.FollowId} className='list-item'>User Id: {user.FollowId}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Following;
