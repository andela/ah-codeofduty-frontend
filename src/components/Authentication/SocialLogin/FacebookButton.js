import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import {socialAuthentication} from './userActions';
import { getUserData } from '../../../utils/authUser'


class FacebookButton extends PureComponent {
  signup = (userToken) => {
    const userData = getUserData('facebook', userToken);

    const { socialAuthentication } = this.props;
      socialAuthentication('api/social_auth/', userData);
  };

  handleFacebookResponse = (response) => {
    const token = response.accessToken;
    this.signup(token);
  };

  render() {
    return (
      <FacebookLogin
        appId="548320132259270"
        fields="name,email,picture"
        callback={this.handleFacebookResponse}
        icon="fa fa-facebook-f"
        cssClass="btn btn-primary"
        textButton=""
        render={renderProps => (
          <button id="color_facebook"
                  onClick={renderProps.onClick}>This is my custom FB button</button>
        )}
      />
    );
  }
}

const mapStateToProps = ({ socialLoginReducer }) => ({
  isLoggedIn: socialLoginReducer.user.isLoggedIn,
  loading: socialLoginReducer.user.loading,
});

FacebookButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
    socialAuthentication: PropTypes.func.isRequired,
};

export { FacebookButton as FacebookTest };
export default connect(mapStateToProps,
  { socialAuthentication: socialAuthentication })(FacebookButton);
