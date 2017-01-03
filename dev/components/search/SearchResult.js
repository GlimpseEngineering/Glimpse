import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { followFoundUser } from '../../actions/searchActionCreators';

class SearchResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      button: 'follow'
    };
  }

  /** may need to change this lifecycle hook */
  componentDidMount() {
    let followRequest = this.props.foundUsers.followedByUser[this.props.searchResult.id];
    followRequest && followRequest.status === 'pending' && this.setState({button: 'pending'});
    followRequest && followRequest.status === 'accepted' && this.setState({button: 'following'});
    /**
     * need to dispatch an action that calls requestFollow -> returned model instance should be stored in state
     * need to dispatch an action that calls acceptFollow -> if accepted, existing model instance in state should be updated
     * 
     */
  }

  onClick(event) {
    event.preventDefault();
    console.log('followId', this.props.searchResult.id);
    console.log('userId', this.props.auth.activeUser.id);
    this.props.followFoundUser(this.props.auth.activeUser.id, this.props.searchResult.id);
  }

  render() {
    console.log('collection of followed users', this.props.foundUsers);
    return (
      <div>
        {this.props.searchResult.username}
        <button onClick={this.onClick.bind(this)}>{this.state.button}</button>
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

const searchResult = connect(mapStateToProps, { followFoundUser })(SearchResult);
export default searchResult;