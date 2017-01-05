import React, { Component } from 'react';
import { connect } from 'react-redux';

class PhotoSphereGen extends Component {

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

const photoSphereGen = connect(null, null)(PhotoSphereGen);
export default photoSphereGen;