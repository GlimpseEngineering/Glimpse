import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOnePost, deletePost } from '../../../actions/postsActionCreators';
import Modal from 'react-modal';
import Moment from 'react-moment';
import PostGenerator from '../../PostGenerator';

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

const postStyles = {
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
      selectedPost: null,
      indexToEdit: null,
    };

    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);

    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);

    this.initiateEdit = () => {

    }

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
    /**
     * consider changing key to the index
     * use the index in the reducer to update state information
     * i.e. do some splices, copy and then change the copy to the desired information 
     */
    return this.props.userPosts.loading ? <h3>loading...</h3> : (
      <div className="feed_content">
        <ul>
          {this.props.userPosts.userPosts.map( (post, i) =>
           <li onClick={(e) => {
             this.setState({
              selectedPost: post,
              indexToEdit: i})
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
            style={postStyles}
            contentLabel="Example Modal"
        >
          <PostGenerator
            postToEdit={this.state.selectedPost}
            indexToEdit={this.state.indexToEdit}
            closeEditModal={this.closeEditModal.bind(this)} />
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
              this.closeDeleteModal();
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
    userPosts: state.userPosts,
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
