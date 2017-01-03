import React, { Component } from 'react';


/**
 * for now
 * in user_info, have a form input that i can use to submit a search term
 * save this search term to the store?
 * reroute to the search page via this.props.history.push('/search')
 * access the search term saved on the store and populate tabs with data
 */

class User_Info extends Component {
  render() {
    console.log('Here are our user props', this.props.user);
    return (
      <div className="col-4 userContainer">
        <div className="profile">
          <div className="picContainer">
            <img src={this.props.user.profPic} className="profPic" />
          </div>
          <div className="profileInfo">
            <div className="username">
              <h4>{this.props.user.username}</h4>
              <p>{this.props.user.email}</p>
            </div>
            <div className="bio">
              <div>

                <label>Bio:</label>
                <button className='editButton'>Edit</button>
              </div>

              <p>{this.props.user.bio}</p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default User_Info;
