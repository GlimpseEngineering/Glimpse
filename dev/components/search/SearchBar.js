import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
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
    console.log('Here is the update local state', this.state);
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