import React, { Component } from 'react';


class New_Feed extends Component {

  render() {

    var followsArray = this.props.follows.forEach(user => {
      return user;
    });
    console.log(followsArray)
    return (
      <div className="feed_content">
       <h2>News Feed yooo</h2>

      </div>
    );
  }
}

export default New_Feed;
