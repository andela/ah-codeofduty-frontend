import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import '../LoginForm/LoginForm.scss';
import { facebookLoginUser } from './userActions';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';


export class SocialLogin extends Component {
  render(){
    return (
      <div className="text-center social-btn flexed">
        <div className="btn btn-danger">
          <GoogleButton />
        </div>
        <div className="btn btn-primary">
          <FacebookButton facebookLoginUserAction={facebookLoginUser} />
        </div>
      </div>
    );
  }
}

export default connect(SocialLogin);
