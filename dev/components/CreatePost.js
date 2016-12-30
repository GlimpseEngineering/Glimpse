/**
 * MVP Inputs: (see World.js in scene folder and be sure to stringify the array) 
 * 1) dropdown showing primitives
 * 2) url as a string of the photosphere
 * 3) children -> null
 *
 * MVP+ Inputs:
 * add children (maybe a button on the ui)
 * edit button (while building) change position of any component in the entity, first in default position
 * 
 * entity-component -> a-frame
 * entity is an empty collection
 * add components to entity
 * 
 * my post is a container
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postsActionCreators';

class CreatePost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      content: '',
      description: '',
      private: 0,
      tags: ''
    };
  }

  submitPost(event) {
    event.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      description: '',
      tags: ''
    });
  }

  onInputChange(event) {
    event.preventDefault();
    let value = event.target.value;
    console.log('Here is the unique identifier of the event', event.target.name);
    console.log('Here is the value we are passing to onInputChange', event.target.value);
    event.target.name === 'content' && this.setState({content: value});
    event.target.name === 'description' && this.setState({description: value});
    event.target.name === 'private' && this.setState({private: value});
    event.target.name === 'tags' && this.setState({tags: value});
  };

  render() {
    return (
      <form onSubmit={this.submitPost.bind(this)}>
        <h3>Create A New World</h3>

        <div>
          <label>Content</label>
          <input 
            type="text"
            name="content"
            value={this.state.content}
            onChange={event => this.onInputChange(event)} />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={event => this.onInputChange(event)} >
          </textarea>
        </div>

        <div>
          <label>Make Private</label>
          <input 
            type="radio" 
            name="private"
            value={this.state.private}
            onChange={event => this.onInputChange(event)} />
        </div>

        <div>
          <label>Tags</label>
          <input 
            type="text"
            name="tags"
            value={this.state.tags}
            onChange={event => this.onInputChange(event)} />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { createPost })(CreatePost);