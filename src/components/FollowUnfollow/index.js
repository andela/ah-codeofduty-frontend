import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { followUnfollow } from './actions';
import Button from '../Profile/Button';
import Aux from '../../hoc/Aux';

class FollowUnfollowButton extends Component {
  state = {
    btnText: 'Follow',
  };

  componentDidMount() {
    if (this.props.followUnfollowStatus.data) {
      if (this.props.followUnfollowStatus.data.profile.following === true) {
        this.setState({ btnText: 'Following' });
      } else {
        this.setState({ btnText: 'Follow' });
      }
    }
  }

  followUnfollowHandler = e => {
    this.props.followUnfollow('gray');
    if (this.props.followUnfollowStatus.data) {
      if (this.props.followUnfollowStatus.data.profile.following === true) {
        this.setState({ btnText: 'Following' });
      } else {
        this.setState({ btnText: 'Follow' });
      }
    }
  };

  render() {
    return (
      <Aux>
        <Button clicked={this.followUnfollowHandler}>{this.state.btnText}</Button>
      </Aux>
    );
  }
}
const mapStateToProps = state => ({
  followUnfollowStatus: state.followUnfollowReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      followUnfollow,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowUnfollowButton);
