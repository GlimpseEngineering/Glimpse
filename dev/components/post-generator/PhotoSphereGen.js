import React, { Component } from 'react';
import { connect } from 'react-redux';

class PhotoSphereGen extends Component {

  render() {
    return (
      <div>
        {this.props.stagedEntity.id}
        Some kind of image showing a photosphere
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