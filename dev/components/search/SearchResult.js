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

  /** 
   * need to change this life cycle hook
   * props are changing but component isn't mounting again, need it to change so searchResult can re-render to set state
   */
  // componentDidMount() {
  //   let followRequest = this.props.foundUsers.followedByUser[this.props.searchResult.id];
  //   followRequest && followRequest.status === 'pending' && this.setState({button: 'pending'});
  //   followRequest && followRequest.status === 'accepted' && this.setState({button: 'following'});
    /**
     * need to dispatch an action that calls requestFollow -> returned model instance should be stored in state
     * need to dispatch an action that calls acceptFollow -> if accepted, existing model instance in state should be updated
     * 
     */
  // }

  componentWillReceiveProps(nextProps) {
    console.log(`clicked on user ${this.props.searchResult.id} with a current request status of ${this.props.foundUsers.followedByUser[this.props.searchResult.id]} vs a next request status of ${nextProps.foundUsers.followedByUser[nextProps.searchResult.id]}`)
    // let followRequest = this.props.foundUsers.followedByUser[this.props.searchResult.id];
    let updatedRequest = nextProps.foundUsers.followedByUser[nextProps.searchResult.id];
    console.log('updated props with follow request', updatedRequest);
    // followRequest && followRequest.status === 'pending' && this.setState({button: 'pending'});
    // followRequest && followRequest.status === 'accepted' && this.setState({button: 'following'});
    updatedRequest && updatedRequest.status === 'pending' && this.setState({button: 'pending'});
    updatedRequest && updatedRequest.status === 'accepted' && this.setState({button: 'following'});
  }

  onClick(event) {
    event.preventDefault();
    // console.log('click event user', event.target.value);
    console.log('click event user', this.props.searchResult.id);
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