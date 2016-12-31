import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUser } from '../../actions/searchActionCreators';
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
    let name = event.target.name;
    let value = event.target.value;
    name === 'searchterm' && this.setState({searchterm: value});
  }

  onSubmit(event) {
    event.preventDefault();
    let searchterm = this.state.searchterm;
    this.props.searchUser(searchterm)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input 
            type="text"
            name="searchterm"
            value={this.state.searchterm}
            onChange={event => this.onInputChange(event)} />

          <button type="submit">Search</button>
        </form>
        <SearchResults />
      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    foundUsers: state.search.foundUsers
  };
}

const search = connect(mapStateToProps, { searchUser })(SearchBar);
export default search;