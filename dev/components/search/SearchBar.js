import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  
  render() {
    return (
      <div>
        <input 
          type="text"
          name="searchterm"
          value={this.state.searchterm}
          onChange={event => this.onInputChange(event)} />
      </div>
    );
  }
};

const search = connect(null, null)(SearchBar);
export default search;