import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import updatePassword from "./actions";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


export class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        new_password: "",
        confirm_password: ""
      },
      token: ""
    };
  }
  componentDidMount() {
    const urll = this.props.location.search;
    const url = urll.split("=")[1];
    const data = url.split("/")[0];
    this.setState({
      token: data
    });
  }
  onChangeHandler = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const postdata = {
      new_password: this.state.user.new_password,
      confirm_password: this.state.user.confirm_password
    };
    this.props.updatePassword(postdata, this.state.token);
  };
  render() {
    return (
      <div>
        <div><ToastContainer /></div>
        <form onSubmit={this.onSubmitHandler}>
          <div className="reset_box">
            <h1>Reset Password</h1>
            <div className="textbox" id="text-input">
              <input type="password" name="new_password" value={this.state.new_password} required onChange={this.onChangeHandler} placeholder="New Password" />
            </div>
            <div className="textbox">
              <input type="password" name="confirm_password" required value={this.state.confirm_password} onChange={this.onChangeHandler} placeholder="Confirm Password" onClick={() => document.getElementById("text-input").style.display === "none"} />
            </div>
            <input className="btnn" type="submit" value="Reset My Password" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newPassword: state.newPassword
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updatePassword
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordResetForm);
