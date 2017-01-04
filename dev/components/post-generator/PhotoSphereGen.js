import React, { Component } from 'react';
import { connect } from 'react-redux';

class PhotoSphereGen extends Component {

  render() {
    return (
      <div>
        {this.props.stagedEntity.id}
      </div>
    );
  }
};

function mapStateToProps(state) {
  stagedEntity: state.newPost.stagedEntity
};

const photoSphereGen = connect(mapStateToProps, null)(PhotoSphereGen);
export default photoSphereGen;