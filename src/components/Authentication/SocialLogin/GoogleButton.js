import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

import { socialAuthentication } from './userActions';
import { signup } from "../../../utils/authUser";

class GoogleButton extends PureComponent {

  handleGoogleResponse = (response) => {
    const token = response.accessToken;
    signup(token, 'google-oauth2');
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="1001056488555-cartsaa3rf95q7lq6ug4ht42f5g5osik.apps.googleusercontent.com"
          redirectUri="/profile"
          onSuccess={this.handleGoogleResponse}
          onFailure={this.handleGoogleResponse}
          className="fa fa-google"
          render={renderProps => (
              <button id="color_google" className="btn btn-danger" onClick={renderProps.onClick}>
                  <i className="fa fa-google"  /></button>
          )}
        >
        </GoogleLogin>
      </div>
    );
  }
}

const mapStateToProps = ({ socialLoginReducer }) => {
    return {
        isLoggedIn: socialLoginReducer.user.isLoggedIn,
        loading: socialLoginReducer.user.loading,
    };
}

GoogleButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  googleLoginUser: PropTypes.func.isRequired,
};

export { GoogleButton as GoogleTest };
export default connect(
  mapStateToProps, { socialAuthentication },
)(GoogleButton);
