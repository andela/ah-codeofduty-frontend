import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sendEmailToUser from './actions';
// import Message from '.';

class PasswordReset extends Component {
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
    const { visible, message } = this.props;
    const message_success = this.props.userEmail.fetched ? this.props.userEmail.message : '';
    const suceess =
      "Reset link has been successfully sent to your email. Check your spam folder if you don't find it.";
    if (this.props.userEmail.message === suceess) {
      const Successmessage = this.props.userEmail.message;
    }
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} id="passwordreset">
          <div className="reset_box">
            <h1>Reset Password</h1>
            <p>
              please enter your email address below and we will send you instruction for setting a
              new password.
            </p>
            <div className="textbox">
              <i className="fa fa-envelope" aria-hidden="true" />

              <input
                type="email"
                id="email"
                required
                name="email"
                value={this.state.email}
                placeholder="exam@example.com"
                onChange={this.onChangeHandler}
              />
            </div>
            <input className="btnn" type="submit" value="Reset my password" />
            <p className="api_alert">
              <span className={`${visible ? 'alert alert-success' : 'd-none'}`}>
                {message || message_success}
              </span>
            </p>
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
