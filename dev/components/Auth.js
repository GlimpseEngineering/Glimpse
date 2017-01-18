import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { login, logout } from '../actions/authActionCreators';
import { getOneUser  } from '../actions/usersActionCreators';
import User_Info from './dashboard/User_Info';
import Modal from 'react-modal';
import PostGenerator from './PostGenerator.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (

      <div className="auth">

        { !this.props.auth.isAuthenticated ? (
          <div >
            <button className="btn-prim" onClick={this.props.login}>Login</button>
          </div>
        ) : (
          <div>

            <button className="btn-prim" onClick={this.props.logout}>Logout</button>
            <button className="btn-prim"
                    onClick={()=>{
                      this.props.getOneUser(this.props.auth.activeUser.id)
                      browserHistory.push(`/#/profile/${this.props.auth.activeUser.id}`)
                    }}>Home
            </button>
            {/* <button className="btn-primary">Post</button> */}
            {/* <div> */}
              <button onClick={this.openModal} className="btn-prim">Post</button>

              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                closeModal={this.closeModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <PostGenerator closeModal={this.closeModal}/>
                {/* <h2 ref="subtitle">Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
                <div>
                  <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                  </form>
                </div> */}

              </Modal>
            {/* </div> */}
          </div>
        )}

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: login,
    logout: logout,
    getOneUser: getOneUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
