import React, { Component } from 'react';
import { connect } from 'react-redux';

class PhotoSphereGen extends Component {

  render() {
    return (
      <div>Use This Component to Edit the PhotoSphere</div>
    );
  }
};

const photoSphereGen = connect(null, null)(PhotoSphereGen);
export default photoSphereGen;