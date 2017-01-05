import React, { Component } from 'react';
import DummyLogin from '../DummyLogin'

/**
 * for now
 * in user_info, have a form input that i can use to submit a search term
 * save this search term to the store?
 * reroute to the search page via this.props.history.push('/search')
 * access the search term saved on the store and populate tabs with data
 */

class User_Info extends Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('user_infor nextprops:',nextProps)
    if(nextProps.loggedIn){
      let myProfile = nextProps.user.id===nextProps.loggedIn.id;
      this.backgroundColor = myProfile ? 'lightBlue' : 'white';
      this.editButton = myProfile ? 
        <button onClick={()=>{this.editProfile(nextProps.user.id)}}
                className='editButton'>Edit Profile
        </button> :
        <button onClick={()=>{this.addFriend(nextProps.user.id)}}
                className='editButton'>Add Friend
        </button>
    } else {
      this.backgroundColor = 'white';
      this.editButton = null;
    }
  }

  addFriend(id) {
    console.log('add friend',id)
  }

  editProfile(id) {
    console.log('edit profile',id)
  }

  render() {
    console.log('Here are our user props', this.props.user);
    return (
      <div className="col-4 userContainer" 
           style={{
             backgroundColor:this.backgroundColor,
             height: '100%'
           }}>
        <div className="profile">
          <div className="picContainer">
            <img src={this.props.user.profPic} className="profPic" />
            {this.editButton}
          </div>
          <div className="profileInfo">
            <div className="username">
              <h4>{this.props.user.username}</h4>
              <p style={{
                   fontSize: '.7em',
                   padding: '4px 0px 15px 0px' 
                 }}>
                {this.props.user.email}
              </p>
            </div>
            <div className="bio">
              <div style={{ paddingBottom: '10px' }}>

                <label>Bio:</label>
              </div>

              <p>{this.props.user.bio}</p>
            </div>
          </div>
          <div><DummyLogin /></div>


        </div>

      </div>
    );
  }
}

export default User_Info;
