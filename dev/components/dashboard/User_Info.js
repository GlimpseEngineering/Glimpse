import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followFoundUser } from '../../actions/searchActionCreators';
import { getFollowersForUser } from '../../actions/followsActionCreators';
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
      console.log(this.props.activeUser.id)
      this.myProfile = this.props.viewedProfile.id===this.props.activeUser.id;
      
      this.backgroundColor = this.myProfile ? 'lightBlue' : 'white';
      this.editButton = this.myProfile ? 
        <button onClick={()=>{this.editProfile(this.props.activeUser.id)}}
                className='editButton'>Edit Profile
        </button> : 
        !this.props.followers.map(p=>p.UserId).includes(this.props.activeUser.id) ?
        <button className='editButton'
                onClick={()=>{
                  this.props.requestFollow(this.props.activeUser.id, this.props.viewedProfile.id)
                }}>Follow
        </button> : 
        <button className='editButton'>Unfollow</button>
    } else {
      console.log('no activeUser in this.props')
      this.backgroundColor = 'white';
      this.editButton = null;
    }  
  }

  componentWillReceiveProps(nextProps) {
    console.log("USER_INFO PROPS:",this.props)
    console.log('user_info nextprops:',nextProps)    
    console.log(nextProps.followers)    
    console.log(nextProps.followers.map(p=>p.UserId))
    if(nextProps.activeUser){
      console.log(nextProps.activeUser.id)
      this.myProfile = nextProps.viewedProfile.id===nextProps.activeUser.id;
      
      this.backgroundColor = this.myProfile ? 'lightBlue' : 'white';
      this.editButton = this.myProfile ? 
        <button onClick={()=>{this.editProfile(nextProps.activeUser.id)}}
                className='editButton'>Edit Profile
        </button> : 
        !nextProps.followers.map(p=>p.UserId).includes(nextProps.activeUser.id) ?
        <button className='editButton'
                onClick={()=>{
                  nextProps.requestFollow(nextProps.activeUser.id, nextProps.viewedProfile.id)
                }}>Follow
        </button> : 
        <button className='editButton'>Unfollow</button>
    } else {
      console.log('no activeUser in nextprops')
      this.backgroundColor = 'white';
      this.editButton = null;
    }
    if (Object.keys(nextProps.foundUsers.followedByUser).length !== Object.keys(this.props.foundUsers.followedByUser).length) {
      console.log('howdy')
      this.props.getFollowersForUser(nextProps.viewedProfile.id)
    }
  } 

  requestFollow(id) {
    console.log('add friend',id)
    console.log(this.props)
    this.props.requestFollow(this.props.activeUser.id, id)
    // send a followRequest from activeUser to viewedProfile
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
    followers: state.followers.userFollowers,
    foundUsers: state.search.foundUsers
  };
}



let info = connect(mapStateToProps, {
  requestFollow: followFoundUser,
  getFollowersForUser: getFollowersForUser,
})(User_Info);

export default info;
