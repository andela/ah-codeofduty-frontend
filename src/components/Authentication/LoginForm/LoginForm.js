import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import login from '../../../views/Auth/LoginForm/actions';
import './LoginForm.scss';
import { Link } from 'react-router-dom';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidUpdate(prevProps) {
    const { history, isLoginSuccess, user } = this.props;
    if (prevProps.isLoginPending && isLoginSuccess) {
      localStorage.setItem('user', JSON.stringify(user));
      window.$('#loginModal').modal('hide');
      window.$('.modal-backdrop').modal('hide');
      window.$('body').removeClass('modal-open');
      window.$('.modal-backdrop').remove();
      history.push('/profile');
    }
  }

  render() {
    let { email, password } = this.state;
    let { loginError, isLoginSuccess, isLoginPending, isLoginError } = this.props;

    let pendingHtml = '';
    let errorHtml = '';

    if (isLoginPending) {
      pendingHtml = <div className="alert alert-info">Please wait...</div>;
    }
    if (isLoginError) {
      errorHtml = <div className="alert alert-danger">{loginError}</div>;
    }

    return (
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="login-form">
                <form className="loginForm" onSubmit={event => this.handleSubmit(event)}>
                  {pendingHtml}
                  {errorHtml}
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="Username"
                        required
                        type="email"
                        id="login-email"
                        name="email"
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        required
                        type="password"
                        id="login-password"
                        value={password}
                        name="password"
                        onChange={e => this.setState({ password: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-warning btn-block login-btn">
                      Login
                    </button>
                  </div>
                  <div className="hint-text small">
                    {' '}
                    Forgot Password? <a href="/resetpassword">Reset Password</a>
                  </div>
                  <div className="or-seperator">
                    <i>or</i>
                  </div>
                  <div className="text-center social-btn flexed">
                    <a href="/" id="color_facebook" className="btn btn-primary">
                      <i className="fa fa-facebook-f" />
                    </a>
                    <a href="/" id="color_twitter" className="btn btn-info">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="/" id="color_google" className="btn btn-danger">
                      <i className="fa fa-google" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    let { email, password } = this.state;
    this.props.login({ email, password });
  };
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.loginReducer.isLoginPending,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    isLoginError: state.loginReducer.isLoginError,
    loginError: state.loginReducer.loginError,
    user: state.loginReducer.user,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    login: ({ email, password }) => dispatch(login({ email, password })),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginForm),
);
