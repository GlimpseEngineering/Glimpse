import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/usersActionCreators';

class ProfileEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      profPic: this.props.user.profPic,
      authId: this.props.user.authId,
      bio: this.props.user.bio,
      email: this.props.user.email,
      dob: this.props.user.dob.split('T')[0],
      gender: this.props.user.gender,
      private: this.props.user.private
    };

  }

  componentWillReceiveProps(nextProps) {
  }

  submitChange(event) {
    event.preventDefault();
    console.log('submitting changed profile:',this.state)
    this.setState(this.state.private? {private:1}:{private:0})
    this.props.updateUser(this.state.id, {
      username: this.state.username,
      profPic: this.state.profPic,
      authId: this.state.authId,
      bio: this.state.bio,
      email: this.state.email,
      dob: this.state.dob,
      gender: this.state.gender,
      private: this.state.private
    })
    this.props.closeModal();
  }

  onInputChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    name === 'username' && this.setState({username: value});
    name === 'profPic' && this.setState({profPic: value});
    name === 'bio' && this.setState({bio: value});
    name === 'email' && this.setState({email: value});
    name === 'dob' && this.setState({dob: value});
    name === 'gender' && this.setState({gender: value});
    name === 'private' && window.setTimeout(()=>{
      this.setState({private: !this.state.private})
    }, 0);
  }

  render() {
    return (
      <form id="editProfile" onSubmit={this.submitChange.bind(this)}>
        <label>Username: </label><br/>
        <input 
          value={this.state.username}
          onChange={event => this.onInputChange(event)}
          name="username"
          type="text" /><br/>
        <label>Profile picture(url): </label><br/>
        <input 
          value={this.state.profPic}
          onChange={event => this.onInputChange(event)}
          name="profPic"
          type="url" /><br/>
        <label>Email: </label><br/>
        <input 
          value={this.state.email}
          onChange={event => this.onInputChange(event)}
          name="email"
          type="email" /><br/>
        <label>Birthday: </label><br/>
        <input 
          value={this.state.dob}
          onChange={event => this.onInputChange(event)}
          name="dob"
          type="date" /><br/>
        <label>Gender: </label><br/>
        <input 
          value={this.state.gender}
          onChange={event => this.onInputChange(event)}
          name="gender"
          type="text" /><br/>
        <label>Private: </label><br/>
        <input 
          onChange={event => this.onInputChange(event)}
          checked={this.state.private? "checked" : ""}
          name="private"
          type="checkbox" /><br/>
        <label>Bio: </label><br/>
        <textarea rows="4" cols="40"
          name="bio" form="editProfile"
          onChange={event => this.onInputChange(event)}
          value={this.state.bio}>
        </textarea><br/>
        <button type="submit">Save Changes</button>
      </form>
    );
  };
}


function mapStateToProps(state) {
  return {};
};

export default connect(mapStateToProps, {
  updateUser: updateUser
})(ProfileEditor);