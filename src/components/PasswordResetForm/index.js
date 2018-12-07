import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updatePassword from './actions';
class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        new_password: '',
        confirm_password: '',
      },
      token: '',
    };
  }
  componentDidMount() {
    const urll = this.props.location.search;
    const url = urll.split('=')[1];
    const data = url.split('/')[0];
    this.setState({
      token: data,
    });
  }
  onChangeHandler = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const postdata = {
      new_password: this.state.user.new_password,
      confirm_password: this.state.user.confirm_password,
    };
    console.log(this.state.token);
    this.props.updatePassword(postdata, this.state.token);
  };

  styleErrorPopUp(none = '') {
    return none;
  }

  render() {
    const matchError = this.props.newPassword.errors
      ? this.props.newPassword.errors.data.error
      : this.styleErrorPopUp('');
    const new_password_error = this.props.newPassword.errors
      ? this.props.newPassword.errors.data.new_password
      : this.styleErrorPopUp('');
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div className="reset_box">
            <h1>Reset Password</h1>

            <div className="textbox">
              {/* <i className="fa fa-key" aria-hidden="true" /> */}
              <input
                type="password"
                name="new_password"
                required
                onChange={this.onChangeHandler}
                placeholder="New Password"
              />
            </div>

            <div className="textbox">
              {/* <i className="fa fa-key" aria-hidden="true" /> */}
              <input
                type="password"
                name="confirm_password"
                required
                onChange={this.onChangeHandler}
                placeholder="Confirm Password"
              />
            </div>

            <input className="btn" type="submit" value="Reset My Password" />
            <p className="api_alert">
              <span className={`alert alert-danger  ${this.styleErrorPopUp()}`}>
                {new_password_error}
                {matchError}
              </span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newPassword: state.newPassword,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updatePassword,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordResetForm);
