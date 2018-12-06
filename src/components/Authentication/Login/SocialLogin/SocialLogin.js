import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import '../../../../App.scss';
import { facebookLoginUser } from './userActions';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';


export class SocialLogin extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-6">
          <GoogleButton />
        </div>
        <div className="col-md-6 ">
          <FacebookButton facebookLoginUserAction={facebookLoginUser} />
        </div>
      </div>
    );
  }
}

export default connect(SocialLogin);
