import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

import { googleLoginUser } from './userActions';

class GoogleButton extends PureComponent {
  signup = (userToken) => {
    const userData = {
      provider: 'google-oauth2',
      access_token: userToken,
    };

    const { googleLoginUser } = this.props;
    googleLoginUser('api/social_auth/', userData);
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
          redirectUri="/"
          onSuccess={this.handleGoogleResponse}
          onFailure={this.handleGoogleResponse}
          className="google"
        >
          <i className="fa fa-google-plus  icon-with-margin" />
          <span className="raised-font"> Google</span>

        </GoogleLogin>
        &nbsp;

      </div>

    );
  }
}

const mapStateToProps = ({ socialLoginReducer }) => ({
  isLoggedIn: socialLoginReducer.user.isLoggedIn,
  loading: socialLoginReducer.user.loading,
});

GoogleButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  googleLoginUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps, { googleLoginUser },
)(GoogleButton);
