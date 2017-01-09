import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followFoundUser, unfollowFoundUser } from '../../actions/searchActionCreators';
import { getFollowersForUser } from '../../actions/followsActionCreators';
import Modal from 'react-modal';
import ProfileEditor from '../ProfileEditor';
import DummyLogin from '../DummyLogin'

const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
};

class User_Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    if(this.props.activeUser){
      this.myProfile = this.props.viewedProfile.id===this.props.activeUser.id;
      
      this.backgroundColor = this.myProfile ? 'lightBlue' : 'white';
      this.editButton = this.myProfile ? 
        <button onClick={this.openModal}
                  className='editButton'>Edit Profile
        </button> : 
        !this.props.followers.filter(p=>p.status='accepted')
          .map(p=>p.UserId).includes(this.props.activeUser.id) ?
        <button className='editButton'
                onClick={()=>{
                  console.log('pre-request prop followers:',this.props.followers)
                  this.props.requestFollow(this.props.activeUser.id, this.props.viewedProfile.id)
                }}>Follow
        </button> : 
        <button className='editButton'
                onClick={()=>{
                  console.log('pre-request prop followers:',this.props.followers)
                  this.props.unfollow(this.props.activeUser.id, this.props.viewedProfile.id)
                }}>unfollow</button>
    } else {
      console.log('no activeUser in this.props')
      this.backgroundColor = 'white';
      this.editButton = null;
    }  
  }

  componentWillReceiveProps(nextProps) {
    console.log("USER_INFO PROPS:",this.props)
    console.log('user_info nextprops:',nextProps)
    if(nextProps.activeUser){
      console.log(nextProps.activeUser.id)
      this.myProfile = nextProps.viewedProfile.id===nextProps.activeUser.id;
      
      this.backgroundColor = this.myProfile ? 'lightBlue' : 'white';
      this.editButton = this.myProfile ? 
        <button onClick={this.openModal}
                className='editButton'>Edit Profile
        </button> :
        !nextProps.followers.filter(p=>p.status='accepted')
          .map(p=>p.UserId).includes(nextProps.activeUser.id) ?
        <button className='editButton'
                onClick={()=>{
                  console.log('pre-request nextprop followers:',nextProps.followers)
                  nextProps.requestFollow(nextProps.activeUser.id, nextProps.viewedProfile.id, null, true)
                }}>Follow
        </button> : 
        <button className='editButton'
                onClick={()=>{
                  console.log('pre-request nextprop followers:',nextProps.followers)
                  nextProps.unfollow(this.props.activeUser.id, nextProps.viewedProfile.id, true)
                }}>unfollow</button>
    } else {
      console.log('no activeUser in nextprops')
      this.backgroundColor = 'white';
      this.editButton = null;
    }
    if (Object.values(nextProps.foundUsers.followedByUser)
              .filter(v=>v.status !=='unfollowed')
              .length !== Object
              .values(this.props.foundUsers.followedByUser)
              .filter(v=>v.status !=='unfollowed')
              .length) {
      console.log('howdy')
      this.props.getFollowersForUser(nextProps.viewedProfile.id)
    }
  } 

  editProfile(id) {
    console.log('edit profile',id)
  }

  openModal() {
    console.log('openModal')
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log('Here are our user props', this.props.viewedProfile);
    return (
      <div className="col-4 userContainer" 
           style={{
             backgroundColor:this.backgroundColor,
             height: '85vh',
             overflow: 'scroll'
           }}>
        <div className="profile">
          <div className="picContainer">
            <img src={this.props.viewedProfile.profPic} className="profPic" />
            {this.editButton}
            <Modal
                isOpen={this.state.modalIsOpen}
                closeModal={this.closeModal.bind(this)}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
              <ProfileEditor user={this.props.activeUser}
                closeModal={this.closeModal.bind(this)}/>
            </Modal>
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
  unfollow: unfollowFoundUser,
  getFollowersForUser: getFollowersForUser,
})(User_Info);

export default info;
