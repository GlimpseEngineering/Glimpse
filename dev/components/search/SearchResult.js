import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { followFoundUser, unfollowFoundUser } from '../../actions/searchActionCreators';
import { getFollowedByUser } from '../../actions/followsActionCreators';
import { Link } from 'react-router';

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
    followRequest && followRequest.status === 'accepted' && this.setState({button: 'unfollow'});
  }

  componentWillReceiveProps(nextProps) {
    this.props && this.props.getFollowedByUser(this.props.auth.activeUser.id);
    let followRequest = this.props.foundUsers.followedByUser[this.props.searchResult.id];
    let updatedRequest = nextProps.foundUsers.followedByUser[nextProps.searchResult.id];
    updatedRequest && updatedRequest.status === 'pending' && this.setState({button: 'pending'});
    updatedRequest && updatedRequest.status === 'accepted' && this.setState({button: 'unfollow'});
    updatedRequest && updatedRequest.status === 'unfollowed' && this.setState({button: 'follow'});
    followRequest && updatedRequest && updatedRequest.status !== followRequest.status && this.props.getFollowedByUser(this.props.auth.activeUser.id);
  }

  onClick(event) {
    event.preventDefault();
    this.state.button === 'follow' && this.props.followFoundUser(this.props.auth.activeUser.id, this.props.searchResult.id, this.props.searchResult.private);
    this.state.button === 'unfollow' && this.props.unfollowFoundUser(this.props.auth.activeUser.id, this.props.searchResult.id);
  }

  render() {
    return (
      <div>
        <Link to={"profile/" + this.props.searchResult.id}>
          <img className="userPic" src={this.props.searchResult.profPic} />
          <p>{this.props.searchResult.username}</p>
        </Link>
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
};

const searchResult = connect(mapStateToProps, { getFollowedByUser, followFoundUser, unfollowFoundUser })(SearchResult);
export default searchResult;