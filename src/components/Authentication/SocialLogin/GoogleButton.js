import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

import { socialAuthentication } from './userActions';

class GoogleButton extends PureComponent {
  signup = (userToken) => {
    const userData = {
      provider: 'google-oauth2',
      access_token: userToken,
    };

    const { socialAuthentication } = this.props;
      socialAuthentication('/api/social_auth/', userData);
  };

  handleGoogleResponse = (response) => {
    const token = response.accessToken;
    this.signup(token);
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
