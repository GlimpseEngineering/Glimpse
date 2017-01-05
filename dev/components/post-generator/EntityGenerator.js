import React, { Component } from 'react';
import { connect } from 'react-redux';

class EntityGenerator extends Component {

  render() {
    return (
      <div>
        {this.props.stagedEntity.id}
        {this.props.stagedEntity.primitive}: some kind of content
        <button>Edit</button>
        <button>Delete</button>
      </div> 
    );
  }
};

// function mapStateToProps(state) {
//   stagedEntity: state.newPost.stagedEntity
// };

const entityGenerator = connect(null, null)(EntityGenerator);
export default entityGenerator;