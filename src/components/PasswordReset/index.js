import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sendEmailToUser from './actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const postdata = {
      email: this.state.email,
    };
    this.props.sendEmailToUser(postdata);
    this.state.email = '';
  };

  render() {
    return (
      <div>
         <div><ToastContainer/></div>
        <form onSubmit={this.onSubmitHandler} id="passwordreset">
          <div className="reset_box"><h1>Reset Password</h1>
            <p>please enter your email address below and we will send you instruction for setting a new password.</p>
            <div className="textbox"><i className="fa fa-envelope" aria-hidden="true" />
              <input type="email" id="email" required name="email" value={this.state.email} placeholder="exam@example.com" onChange={this.onChangeHandler} />
            </div>
            <input className="btnn" type="submit" value="Reset my password" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userEmail: state.userEmail,
  visible: state.userEmail.visible,
  message: state.userEmail.errors,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendEmailToUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordReset);
