import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { followFoundUser, unfollowFoundUser } from '../../actions/searchActionCreators';
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
    let updatedRequest = nextProps.foundUsers.followedByUser[nextProps.searchResult.id];
    updatedRequest && updatedRequest.status === 'pending' && this.setState({button: 'pending'});
    updatedRequest && updatedRequest.status === 'accepted' && this.setState({button: 'unfollow'});
    updatedRequest && updatedRequest.status === 'unfollowed' && this.setState({button: 'follow'});
    if (this.props.searchResult.id === 2 || this.props.searchResult.id === 6) {
      console.log('props before unfollowing user', this.props.foundUsers);
      console.log('props after unfollowing user', nextProps.foundUsers);
    }
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

const searchResult = connect(mapStateToProps, { followFoundUser, unfollowFoundUser })(SearchResult);
export default searchResult;