import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class SearchResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      button: 'follow'
    };
  }

  componentDidMount() {
    if (this.props.foundUsers.followedByUser[this.props.searchResult.id]) this.setState({button: 'following'});
    /**
     * need to dispatch an action when calling requestFollow
     * need to dispatch an action when calling acceptFollow
     * 
     * trying to check and see if the user is already following the searched individual (make call to getFollowByUser in controller)
     * if record already exists in the follows table, and they are following, can update the button
     * 
     * otherwise, clicking follow just calls the requestFollow f(x) in the controller
     * for the moment: can also call acceptFollow since we are ignoring privacy atm
     * 
     */
  }

  render() {
    return (
      <div>
        {this.props.searchResult.username}
        <button>{this.state.button}</button>
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

const searchResult = connect(mapStateToProps, null)(SearchResult);
export default searchResult;