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

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.props.getFollowersForUser(this.props.viewedProfile.id)
    // if(this.props.activeUser){
    //   this.myProfile = this.props.viewedProfile.id===this.props.activeUser.id;
    //   this.backgroundColor = this.myProfile ? 'lightBlue' : 'white';

    // } else {
    //   console.log('no activeUser in this.props')
    //   this.backgroundColor = 'white';
    //   // this.editButton = null;
    // }
    console.log('setting state to defaults in constructor')
    this.state = {
      modalIsOpen: false,
      buttonText: 'loading',
      handleClick: null,
      backgroundColor: this.backgroundColor
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log("USER_INFO PROPS:",this.props)
    // console.log('user_info nextprops:',nextProps)
    if(nextProps.activeUser) {
      this.myProfile = nextProps.viewedProfile.id===nextProps.activeUser.id;
      this.activeUserFollowsProfile = nextProps.followers.filter(p=>p.status='accepted')
          .map(p=>p.UserId).includes(nextProps.activeUser.id)

      this.buttonText = this.myProfile ?
          'Edit Profile' : this.activeUserFollowsProfile ?
            'Unfollow' : 'Follow'

      this.handleClick = this.myProfile ?
        this.editProfClick.bind(this) :
        this.activeUserFollowsProfile ?
          this.unFollowClick.bind(this) :
          this.followClick.bind(this)

      this.backgroundColor = this.myProfile ? 'lightBlue' : '#B5CBB7';

    } else {
      console.log('no activeUser in nextprops')
      this.backgroundColor = 'white';
      this.buttonText = null;
      this.handleClick=null
      // this.editButton = null;
    }
    console.log('*|*|*|*|*|*|*|*|*')
    console.log('USER_INFO will recieve props')
    console.log('user_info old props:',this.props)
    console.log('user_info new props:',nextProps)
    console.log('viewed profile followers:',nextProps.followers.filter(p=>p.status='accepted').map(p=>p.UserId))
    nextProps.activeUser && console.log('next active user:',nextProps.activeUser.id)
    console.log(`setting button Text from ${this.state.buttonText} to ${this.buttonText}`)
    if(nextProps.followers.length !== this.props.followers.length || this.state.buttonText === 'loading'){
      this.setState({
        buttonText: this.buttonText,
        handleClick: this.handleClick,
        backgroundColor: this.backgroundColor
      },()=>{
        console.log('button text:',this.state.buttonText)
        console.log('_________________')
      })
    }
    let oldFollowedBy = Object.values(this.props.foundUsers.followedByUser)
    let newFollowedBy = Object.values(nextProps.foundUsers.followedByUser)

    // check to see if the followedBy prop has changed in number or value
    newFollowedBy && !newFollowedBy.every((follow,i)=>
      oldFollowedBy[i] && follow.status === oldFollowedBy[i].status
    ) && this.props.getFollowersForUser(nextProps.viewedProfile.id);

    // console.log(Object.values(this.props.foundUsers.followedByUser))
    // console.log(Object.values(nextProps.foundUsers.followedByUser))

  }

  editProfClick(){
    this.openModal()
  }

  followClick(){
    console.log('pre-request nextprop followers:',this.props.followers)
    console.log(`setting button Text from ${this.state.buttonText} to Unfollow at followClick`)
    this.setState({buttonText:'Unfollow'})
    this.props.requestFollow(this.props.activeUser.id, this.props.viewedProfile.id, null, true)
  }
   unFollowClick(){
    console.log('pre-request nextprop followers:',this.props.followers)
    console.log(`setting button Text from ${this.state.buttonText} to Follow at unfollowClick`)
    this.setState({buttonText:'Follow'})
    this.props.unfollow(this.props.activeUser.id, this.props.viewedProfile.id, true)
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
    return (
      <div className="col-4 userContainer">
        <div className="profileContainer"
             style={{
               backgroundColor:this.state.backgroundColor,
              //  height: '85vh',
              //  overflow: 'scroll'
             }}>
          <div className="profile">
            <div className="picContainer">

              <img src={this.props.viewedProfile.profPic} className="profPic" />

            </div>
            <div className="profileButton">
              {!this.props.activeUser ? null :
              <button className='editButton'onClick={this.state.handleClick}>
                {this.state.buttonText}
              </button>}
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
                <p >
                  {this.props.viewedProfile.email}
                </p>
              </div>
              <div className="bio">
                <div >

                  <label>Bio:</label>
                </div>

                <p>{this.props.viewedProfile.bio}</p>
              </div>
            </div>
            <div><DummyLogin /></div>


          </div>

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
