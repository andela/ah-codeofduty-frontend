import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Navbar';
import { registerUser } from './actions';
import Message from './message';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      // State is read-only:
      // The only way to change the state is to emit an action, an object describing what happened.
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = this.state;
    const user = {
      username,
      email,
      password,
    };
    const { registerUser } = this.props;
    registerUser(user);
  }

  render() {
    const { visible, message, success } = this.props;
    return (
      <div>
        <div className="modal" id="register_modal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal body  */}
              <div className="modal-body">
                <div className="login-form">
                  <form onSubmit={this.handleSubmit} id="signupform">
                    <h3 className="text-center">Register</h3>

                    {visible && (
                      <Message
                        visible={visible}
                        message={message}
                        success={success}
                      />
                    )}

                    <div className="form-group">
                      <div className="input-group">
                        <input
                          required
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="Username"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          required
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          onChange={this.handleChange}
                          id="email"
                          value={this.state.email}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          required
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          required
                          type="password"
                          className="form-control"
                          name="confirm_password"
                          placeholder="Confirm Password"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-warning btn-block login-btn"
                      >
                        Register
                      </button>
                    </div>
                    <div className="or-seperator">
                      <i>or</i>
                    </div>
                    <div className="text-center social-btn flexed">
                      <a
                        href="/"
                        id="color_facebook"
                        className="btn btn-primary"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="/" id="color_twitter" className="btn btn-info">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="/" id="color_google" className="btn btn-danger">
                        <i className="fa fa-google" />
                      </a>
                    </div>
                  </form>
                  <div className="hint-text small">
                    I have an account?
{" "}
                    <a href="/" className="text-primary">
                      Login here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.authReducer.visible,
  message: state.authReducer.message,
  message2: state.authReducer.message2,
  success: state.authReducer.success,
});

export default connect(
  mapStateToProps,
  { registerUser },
)(Register);
