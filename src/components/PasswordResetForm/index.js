import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import updatePassword from "./actions";
class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        new_password: "",
        confirm_password: ""
      },
      token: ""

    };
    this.error = '';
    this.visible = '';
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

  styleErrorPopUp(none = "") {
    return none;
  }


  render() {

    if (this.props.newPassword.errors !== null) {
      this.error = "Password must contain at least 8 characters Password must contain a number and a letter and that are not repeating more that two times";
      this.visible = true;
    }
    if (this.props.newPassword.message === 'Congratulations! You have successfully changed your password.') {
      console.log("hbhebdhedvdgh")
      this.visible = false;
      this.props.history.push('/login')
    }

    return (
      <div>
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
            <p className="api_alert"><span className={`${this.visible ? 'alert alert-danger' : 'd-none'}`}>{this.error}</span> </p>
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
