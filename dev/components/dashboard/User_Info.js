import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    if(this.props.activeUser){
      this.myProfile = this.props.viewedProfile.id==this.props.activeUser.id;
      
      this.backgroundColor = this.myProfile ? 'lightBlue' : 'white';
      this.editButton = this.myProfile ? 
        <button onClick={()=>{this.editProfile(this.props.activeUser.id)}}
                className='editButton'>Edit Profile
        </button> :
        <button onClick={()=>{this.addFriend(this.props.viewedProfile.id)}}
                className='editButton'>Follow
        </button>
    } else {
      console.log('no activeUser in this.props')
      this.backgroundColor = 'white';
      this.editButton = null;
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('user_info nextprops:',nextProps)
    if(nextProps.activeUser){
      this.myProfile = nextProps.viewedProfile.id===nextProps.activeUser.id;
      
      this.backgroundColor = this.myProfile ? 'lightBlue' : 'white';
      this.editButton = this.myProfile ? 
        <button onClick={()=>{this.editProfile(nextProps.activeUser.id)}}
                className='editButton'>Edit Profile
        </button> :
        <button onClick={()=>{this.addFriend(nextProps.viewedProfile.id)}}
                className='editButton'>Follow
        </button>
    } else {
      console.log('no activeUser in nextprops')
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
    console.log('Here are our user props', this.props.viewedProfile);
    return (
      <div className="col-4 userContainer" 
           style={{
             backgroundColor:this.backgroundColor,
             height: '100%'
           }}>
        <div className="profile">
          <div className="picContainer">
            <img src={this.props.viewedProfile.profPic} className="profPic" />
            {this.editButton}
          </div>
          <div className="profileInfo">
            <div className="username">
              <h4>{this.props.viewedProfile.username}</h4>
              <p style={{
                   fontSize: '.7em',
                   padding: '4px 0px 15px 0px' 
                 }}>
                {this.props.viewedProfile.email}
              </p>
            </div>
            <div className="bio">
              <div style={{ paddingBottom: '10px' }}>

                <label>Bio:</label>
              </div>

              <p>{this.props.viewedProfile.bio}</p>
            </div>
          </div>
          <div><DummyLogin /></div>


        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    activeUser: state.auth.activeUser,
    viewedProfile: state.user.viewedProfile,
    follows: state.follows.userFollows
  };
}



export default connect(mapStateToProps)(User_Info);
