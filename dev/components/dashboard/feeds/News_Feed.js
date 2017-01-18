import 'aframe';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOnePost } from '../../../actions/postsActionCreators';
import { getOneUser  } from '../../../actions/usersActionCreators';
import Moment from 'react-moment';

class News_Feed extends Component {

  handleSelect(event){
  }

  render() {
    return this.props.userFeed.loading ? <h3>loading...</h3> : (
      <div className="feed_content">
       <ul>
         {this.props.userFeed.followingPosts.map( post =>
           <li
             key={post.id}
             className='list-item'
             value={post.id}>
             {/* <div> */}

              <div className="col-2">
                <img className="userPic" src={post.userInfo.profPic}
                     onClick={(e) => {
                       this.props.getOneUser(post.userInfo.id)
                     }}/>

              </div>
              <div className='col-8 componentInfo'
                   onClick={(e) => {
                     this.handleSelect(e);
                     this.props.getOnePost(post.id)
                   }}>
                <div className="description">
                  {post.description}
                </div>
                <br/>
                <img className='previewImg'
                      src={post.previewUrl}
                      width='400'  height='200'
                />



              </div>
              <div className="col-2 time">
                <Moment fromNow style={{ fontSize: '.9em' }}>{post.createdAt}</Moment>
              </div>
             {/* </div> */}
           </li>
         )}
       </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userFeed: state.userFeed
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOnePost: getOnePost,
    getOneUser: getOneUser
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(News_Feed);
