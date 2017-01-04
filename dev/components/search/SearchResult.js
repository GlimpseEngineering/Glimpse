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

  componentDidMount() {
    let followRequest = this.props.foundUsers.followedByUser[this.props.searchResult.id];
    followRequest && followRequest.status === 'pending' && this.setState({button: 'pending'});
    followRequest && followRequest.status === 'accepted' && this.setState({button: 'following'});
  }

  /**
   * need to dispatch an action that calls requestFollow -> returned model instance should be stored in state (done)
   * need to dispatch an action that calls acceptFollow -> if accepted, existing model instance in state should be updated
   */
  componentWillReceiveProps(nextProps) {
    let updatedRequest = nextProps.foundUsers.followedByUser[nextProps.searchResult.id];
    updatedRequest && updatedRequest.status === 'pending' && this.setState({button: 'pending'});
    updatedRequest && updatedRequest.status === 'accepted' && this.setState({button: 'following'});
  }

  onClick(event) {
    event.preventDefault();
    this.props.followFoundUser(this.props.auth.activeUser.id, this.props.searchResult.id);
  }

  render() {
    return (
      <div>
        {this.props.searchResult.username}
        <button value={this.props.searchResult.id} onClick={this.onClick.bind(this)}>{this.state.button}</button>
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