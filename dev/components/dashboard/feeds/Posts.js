import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOnePost, deletePost } from '../../../actions/postsActionCreators';
import Modal from 'react-modal';
import Moment from 'react-moment';

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

class Posts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      editModalIsOpen: false,
      deleteModalIsOpen: false,
      selectedPost: null
    };

    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);

    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);

    if(this.props.activeUser){
      this.myProfile = this.props.viewedProfile.id===this.props.activeUser.id;
      console.log('MY PROFILE?????', this.myProfile)
      
      this.editButton = this.myProfile ? 
        <div>
          <button className='editButton'
            onClick={()=>{setTimeout(this.openDeleteModal, 0)}}>Delete
          </button>
          <button className='editButton'
            onClick={()=>{setTimeout(this.openEditModal, 0)}}>Edit
          </button>
        </div> : null
  } else {
      this.editButton = null;
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.activeUser){
      this.myProfile = nextProps.viewedProfile.id===nextProps.activeUser.id;
      console.log('MY PROFILE?????', this.myProfile)
      
      this.editButton = this.myProfile ? 
        <div>
          <button className='editButton'
             onClick={()=>{setTimeout(this.openDeleteModal, 0)}}>Delete
          </button>
          <button className='editButton'
            onClick={()=>{setTimeout(this.openEditModal, 0)}}>Edit
          </button>
        </div> : null
  } else {
      this.editButton = null;
    }
  }


  openEditModal() {
    this.setState({editModalIsOpen: true});
  }

  closeEditModal() {
    this.setState({editModalIsOpen: false});
  }

  openDeleteModal() {
    console.log('this.state.selectedPost',this.state.selectedPost)
    this.setState({deleteModalIsOpen: true});
  }

  closeDeleteModal() {
    this.setState({deleteModalIsOpen: false});
  }

  render() {

    return (
      <div className="feed_content">
        <ul>
          {this.props.userPosts.map( post =>
           <li onClick={(e) => {
             this.setState({selectedPost:post})
             if (e.target.className !=='editButton') {
               this.props.getOnePost(post.id)
           }}}
             key={post.id}
             className='list-item'
             value={post.id}
             >
            <div className="col-2" >
              <img className="userPic" src={this.props.user.profPic} />
            </div>
            <div className='col-8 componentInfo'>
              <p>{post.description}</p>
            </div>
            <div className="col-2">
              <Moment fromNow style={{ fontSize: '.9em' }} >
                {post.createdAt}
              </Moment>
              {this.editButton}
            </div>
           </li>
          )}
        </ul>
        <Modal
            isOpen={this.state.editModalIsOpen}
            closeEditModal={this.closeEditModal.bind(this)}
            onRequestClose={this.closeEditModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
          <div>sup tho</div>
        </Modal>
        <Modal
            isOpen={this.state.deleteModalIsOpen}
            closeDeleteModal={this.closeDeleteModal.bind(this)}
            onRequestClose={this.closeDeleteModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
          <div>

            <h3>Delete this post?</h3>
            <p>{this.state.selectedPost && this.state.selectedPost.description}</p>
            <br/>
            <button onClick={()=>{
              console.log('delete',this.state.selectedPost);
              this.props.deletePost(this.state.selectedPost.id);
              this.closeDeleteModal.bind(this);
            }}>
              Delete
            </button>
            <button onClick={this.closeDeleteModal.bind(this)}>
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // returns input state as props in output
  return {
    activeUser: state.auth.activeUser,
    viewedProfile: state.user.viewedProfile,
    followers: state.followers.userFollowers,
    foundUsers: state.search.foundUsers
  };
}

function mapDispatchToProps(dispatch) {
  // pass the result of selectBook to all reducers
  return bindActionCreators({ 
    getOnePost: getOnePost,
    deletePost: deletePost
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
