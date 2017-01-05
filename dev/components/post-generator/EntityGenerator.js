import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEntity } from '../../actions/postsActionCreators';

class EntityGenerator extends Component {
  /**
   * maybe we can call a function called edit scene
   * set a bool on state to show a form if needed
   * use the form to update the object 
   * need a file to store all those forms 
   */

  deleteEntity() {
    this.props.deleteEntity(this.props.stagedEntity.id);
  }

  render() {
    console.log('passing delete scene to child', this.props.deleteScene);
    return (
      <div>
        {this.props.stagedEntity.id}
        {this.props.stagedEntity.primitive}: some kind of content
        <button>Edit</button>
        <button onClick={this.deleteEntity.bind(this)}>Delete</button>
      </div> 
    );
  }
};

// function mapStateToProps(state) {
//   stagedEntity: state.newPost.stagedEntity
// };

const entityGenerator = connect(null, { deleteEntity })(EntityGenerator);
export default entityGenerator;