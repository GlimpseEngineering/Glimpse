import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    return (
      <div>hey</div>
    );
  }
}

function mapStateToProps(state){
  return {
    foundUsers: state.search.foundUsers
  };
}

const searchResults = connect(mapStateToProps, null)(SearchResults);
export default searchResults;