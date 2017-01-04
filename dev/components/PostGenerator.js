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
      content: '',
      description: '',
      private: 0,
      tags: '',
      src: '',
      sceneComplete: false
    };

    this.primitiveCollection = [];

    this.basePrimitive = {
      primitive: 'PhotoSphere',
      components: {
        src: ''
      },
      children: null
    };
  }

  submitPost(event) {
    event.preventDefault();
    this.props.createPost(this.state);
    console.log('user ' + this.props.auth.activeUser.id + ' made a post!!!!!');
    this.setState({
      description: '',
      tags: ''
    });
  }

  submitScene(event) {
    event.preventDefault();
    this.basePrimitive.components.src = this.state.src;
    this.primitiveCollection.push(this.basePrimitive);
    this.setState({content: JSON.stringify(this.primitiveCollection)});
  }

  onInputChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    name === 'description' && this.setState({description: value});
    name === 'private' && this.setState({private: value});
    name === 'tags' && this.setState({tags: value});
    name === 'url' && this.setState({src: value});
  }

  onPrimitiveChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.basePrimitive.primitive = value;
  }

  render() {
    // console.log('inside of PostGenerator', this.props);
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
