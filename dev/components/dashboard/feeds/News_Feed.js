import React, { Component } from 'react';


class New_Feed extends Component {

  handleSelect(event){
    console.log('you clicked on post id:', event.target.value);
  }

  render() {

    return (
      <div className="feed_content">
       <ul>
         {this.props.allPosts.map( post =>
           <li
             onClick={this.handleSelect}
             key={post.id}
             className='list-item'
             value={post.id}
             >
             UserId: {post.UserId} postId: {post.id}
           </li>
         )}
       </ul>
      </div>
    );
  }
}

export default New_Feed;
