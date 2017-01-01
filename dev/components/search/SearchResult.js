import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
  render() {
    return (
      <div>
        {this.props.searchResult.username}
        <button>Follow</button>
      </div>
    );
  }
};

const searchResult = connect(null, null)(SearchResult);
export default searchResult;