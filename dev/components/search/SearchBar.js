import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUser, clearSearch } from '../../actions/searchActionCreators';
import SearchResults from './SearchResults';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchterm: ''
    };
  }

  onInputChange(event) {
    event.preventDefault();
    this.setState({searchterm: event.target.value});
    this.props.searchUser(event.target.value, this.props.auth.activeUser.id);
    if (event.target.value === '') {
      this.props.clearSearch();
    }
  }

  render() {
    return (
      <div className="searchBar">
        <form>
        <input
          className="searchBarInput"
          type="text"
          name="searchterm"
          value={this.state.searchterm}
          onChange={event => this.onInputChange(event)} />

          <button type="submit" className="btn-primary" >Search</button>

        </form>
        <SearchResults className="searchResult"/>

      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    auth: state.auth,
    foundUsers: state.search.foundUsers
  };
}

const search = connect(mapStateToProps, { searchUser, clearSearch })(SearchBar);
export default search;
