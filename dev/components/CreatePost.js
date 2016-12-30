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
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/postsActionCreators';
import { Link } from 'react-router';

class NewPost extends Component {
  onSubmit(props) {
    console.log('Values that we are submitting with the form', props);
    this.props.createPost(props);
  }

  render() {
    const { fields: {content, description, privacy, tags}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New World</h3>

        <div>
          <label>Content</label>
          <input type="text" {...content} />
        </div>

        <div>
          <label>Description</label>
          <textarea {...description}></textarea>
        </div>

        <div>
          <label>Privacy Options</label>
          <input type="radio" name="private" value={0} {...privacy} /> Public
          <input type="radio" name="private" value={1} {...privacy} /> Private 
        </div>

        <div>
          <label>Tags</label>
          <input type="text" {...tags} />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default connect(null, { createPost })(reduxForm({
  form: 'NewPost',
  fields: ['content', 'description', 'privacy', 'tags']
})(NewPost))