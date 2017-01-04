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
import PhotoSphereGen from './post-generator/PhotoSphereGen';

class PostGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.auth.activeUser.id,
      content: [],
      description: '',
      private: 0,
      tags: '',
      sceneComplete: false
    };

    this.primitiveCollection = [];
  }

  submitPost(event) {
    event.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      content: [],
      description: '',
      private: 0,
      tags: '',
      sceneComplete: true
    });
  }

  submitScene(event) {
    event.preventDefault();
    /**
     * going to have figure a way to manipulate data passed in to the store using this function
     * can use the store to simply pass around an object
     * initial state can just be an entity with a value of null
     * replace the entity value with an object containing the requisite properties
     * pass that value back to PostGenerator via props
     * once back in props can make a copy of it, manipulate it however necessary
     * then put it into the primitiveCollection in the correct format
     * alternatively, we can give each entity a key that we can use for when we want to edit a scene
     * finally, right before actual submission, we iterate through the object and pass the data to primitiveCollection in the correct format 
     */
  }

  onInputChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    name === 'description' && this.setState({description: value});
    name === 'private' && this.setState({private: value});
    name === 'tags' && this.setState({tags: value});
  }

  onPrimitiveChange(event) {
    /**
     * here we would want to load the various forms so that the user can edit them 
     * so on change we can set a different form as visible 
     */
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.basePrimitive.primitive = value;
  }

  render() {
    return (
      <div>
        <h3>Create A New Scene</h3>

        <select
          name="primitive"
          onChange={event => this.onPrimitiveChange(event)} >
          <option value="PhotoSphere">PhotoSphere</option>
        </select>

        <form
          id="photosphere"
          onSubmit={this.submitScene.bind(this)} >
          <div>
            <label>Image URL (click add before clicking submit!)</label>
            <input
              type="text"
              name="url"
              value={this.state.src}
              onChange={event => this.onInputChange(event)} />
          </div>

          <button type="submit">Add this scene!</button>
        </form>

        <form
          id="post"
          onSubmit={this.submitPost.bind(this)}
          className={this.state.sceneComplete ? "" : "hide-post-details"} >
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

export default connect(mapStateToProps, { createPost })(PostGenerator);
