import React, { Component } from 'react';


class Followers extends Component {



  render() {
    // if(this.props.followers){
    //   console.log(this.props.followers);
    // }

    return (
      <div className="feed_content">
        <ul>
          {this.props.followers.map( user =>
            <li key={user.UserId} className='list-item'>User Id: {user.UserId}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Followers;
