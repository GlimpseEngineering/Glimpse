import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEntity, deleteEntity } from '../../actions/postsActionCreators';

class EntityGenerator extends Component {
  /**
   * in order to edit this component i need to:
   * 1) access THIS entity's props
   * 2) option 1: need to copy entity's props, change them, then send back up to the parent, re-render parent
   * 2) option 2: access this entity's props, change them, send back up to parent, re-render this entity 
   * 3) need to ensure that the change to this entity's props is reflected in the entityCollection
   * 4a) need to ensure that this component re-renders 
   * 4b) may be able to force re-rendering by manipulating state on this component
   * 5a) edited scene needs to be passed along via store 
   */
  editEntity() {
    let copiedEntity = Object.assign({}, this.props.stagedEntity, {
      children: 'yas'
    });
    console.log('original entity', this.props.stagedEntity);
    console.log('copied entity', copiedEntity);
    // this.props.editEntity(copiedEntity);
  }

  deleteEntity() {
    this.props.deleteEntity(this.props.stagedEntity.id);
  }

  render() {
    console.log('passing delete scene to child', this.props.deleteScene);
    return (
      <div>
        {this.props.stagedEntity.id}
        {this.props.stagedEntity.primitive}: some kind of content {this.props.stagedEntity.children}
        <button onClick={this.editEntity.bind(this)}>Edit</button>
        <button onClick={this.deleteEntity.bind(this)}>Delete</button>
      </div> 
    );
  }
};

const entityGenerator = connect(null, { editEntity, deleteEntity })(EntityGenerator);
export default entityGenerator;