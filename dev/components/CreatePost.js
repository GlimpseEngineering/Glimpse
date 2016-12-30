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

  render() {
    return (
      <form>
        <h3>Create A New World</h3>

        <div>
          <label>Content</label>
          <input type="text" />
        </div>

        <div>
          <label>Description</label>
          <textarea></textarea>
        </div>

        <div>
          <label>Privacy Options</label>
          <input type="radio" name="private" value={0} /> Public
          <input type="radio" name="private" value={1} /> Private 
        </div>

        <div>
          <label>Tags</label>
          <input type="text" />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default connect(null, { createPost })(CreatePost);