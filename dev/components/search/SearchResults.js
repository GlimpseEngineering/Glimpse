import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { clearSearch } from '../../actions/searchActionCreators';

class SearchResults extends Component {
  componentWillUnmount() {
    this.props.clearSearch();
  }

  render() {
    let props = this.props;
    let userProfiles = [];
    
    for (let user in props.foundUsers.users.rows) {
      userProfiles.push(props.foundUsers.users.rows[user]);
    };

    let searchResults = userProfiles.map((searchResult) => {
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
};

function mapStateToProps(state){
  return {
    foundUsers: state.search.foundUsers
  };
};

const searchResults = connect(mapStateToProps, { clearSearch })(SearchResults);
export default searchResults;