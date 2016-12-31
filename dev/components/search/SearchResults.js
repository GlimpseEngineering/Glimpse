import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';

class SearchResults extends Component {

  render() {
    let props = this.props;
    let searchResults = props.foundUsers.rows.map((searchResult) => {
      return (
        <SearchResult
          key={searchResult.id} 
          searchResult={searchResult} />
      );
    });

    return (
      <ul>
        {searchResults}
      </ul>
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