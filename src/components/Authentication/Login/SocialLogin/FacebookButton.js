import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import { facebookLoginUser } from './userActions';

class FacebookButton extends PureComponent {
  signup = (userToken) => {
    const userData = {
      provider: 'facebook',
      access_token: userToken,
    };
    const { facebookLoginUser } = this.props;
    facebookLoginUser('api/social_auth/', userData);
  };

  handleFacebookResponse = (response) => {
    console.log(response)
    const token = response.accessToken;
    this.signup(token);
  };

  render() {
    return (
      <FacebookLogin
        appId="548320132259270"
        fields="name,email,picture"
        callback={this.handleFacebookResponse}
        icon="fa fa-facebook icon-with-margin"
        cssClass="facebook"
        textButton=""
        render={renderProps => (
          <button onClick={renderProps.onClick}>This is my custom FB button</button>
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
  facebookLoginUser: PropTypes.func.isRequired,
};

export { FacebookButton as FacebookTest };
export default connect(mapStateToProps,
  { facebookLoginUser: facebookLoginUser })(FacebookButton);
