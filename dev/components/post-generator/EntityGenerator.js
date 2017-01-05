import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEntity, deleteEntity } from '../../actions/postsActionCreators';

class EntityGenerator extends Component {
  /**
   * able to edit via store
   * can change children 
   * need to make more dynamic and find a way to edit the actual props in the Component
   */
  editEntity() {
    let copiedEntity = Object.assign({}, this.props.stagedEntity, {
      children: 'yas'
    });
    console.log('original entity', this.props.stagedEntity);
    console.log('copied entity', copiedEntity);
    this.props.editEntity(copiedEntity);
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