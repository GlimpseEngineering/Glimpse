/**
 * MVP Inputs: (see World.js in scene folder and be sure to stringify the array) 
 * 1) dropdown showing primitives
 * 2) url as a string of the photosphere
 * 3) children -> null
 *
 * MVP+ Inputs:
 * 1) add children (maybe a button on the ui)
 * 2) edit button (while building) change position of any component in the entity, first in default position
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

    this.primitiveCollection = [];

    this.basePrimitive = {
      primitive: '',
      components: {},
      children: null
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

  submitScene(event) {
    event.preventDefault();
  }

  onInputChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    name === 'description' && this.setState({description: value});
    name === 'private' && this.setState({private: value});
    name === 'tags' && this.setState({tags: value});
    name === 'primitive' && console.log(value);
  };

  render() {
    return (
      <div>
        <h3>Create A New Scene</h3>
          
        <select 
          name="primitive"
          onChange={event => this.onInputChange(event)} >
          <option value="PhotoSphere">PhotoSphere</option>
          <option value="Camera">Camera</option>
          <option value="Text">Text</option>
        </select>

        <form 
          id="photosphere"
          onSubmit={this.submitScene.bind(this)} >
          <div>
            <label>Image URL</label>
            <input 
              type="text"
              name="url" />
          </div>
          
          <button type="submit">Add this scene!</button>
        </form>
        
        <form 
          id="post"
          onSubmit={this.submitPost.bind(this)} >
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
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { createPost })(CreatePost);