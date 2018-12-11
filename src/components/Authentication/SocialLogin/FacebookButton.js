import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import {socialAuthentication} from './userActions';
import { signup } from "../../../utils/authUser";

class FacebookButton extends PureComponent {
  handleFacebookResponse = (response) => {
    const token = response.accessToken;
    signup(token, 'facebook');
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
