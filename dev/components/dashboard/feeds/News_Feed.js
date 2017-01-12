import 'aframe';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOnePost } from '../../../actions/postsActionCreators';
import Moment from 'react-moment';

class News_Feed extends Component {

  handleSelect(event){
    console.log('you clicked on post id:', event.target.value);
  }

  render() {
    return this.props.userFeed.loading ? <h3>loading...</h3> : (
      <div className="feed_content">
       <ul>
         {this.props.userFeed.followingPosts.map( post =>
           <li
             onClick={(e) => {
               this.handleSelect(e);
               this.props.getOnePost(post.id)
             }}
             key={post.id}
             className='list-item'
             value={post.id}>
             {/* <div> */}
              <div className="col-2">
                <img className="userPic" src={post.userInfo.profPic} />
              </div>
              <div className='col-8 componentInfo'>
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
  // returns input state as props in output
  return {
    userFeed: state.userFeed
  };
}

function mapDispatchToProps(dispatch) {
  // pass the result of selectBook to all reducers
  return bindActionCreators({ getOnePost: getOnePost }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(News_Feed);
