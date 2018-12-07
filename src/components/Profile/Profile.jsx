import React, { Component } from 'react';
import { connect } from 'react-redux';

import Bio from './Bio';
import Stories from './Stories/Stories';
import Modal from '../Modal/Modal';
import Edit from './Edit/Edit';
import getItem from '../../utils/getItem';
import {
  getProfile,
  getFollowers,
  getFollowing,
  editProfile,
  cancelEdit,
} from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    const user = getItem('user');
    const { token, username } = user;

    const { dispatch } = this.props;
    dispatch(getFollowers(username, token));
    dispatch(getFollowing(username, token));
    dispatch(getProfile(username));
    dispatch(editProfile);
  }

  render() {
    const {
      profile, followers, following, showModal, dispatch,
    } = this.props;

    return (
      <div>
        <Modal show={showModal} cancel={() => dispatch(cancelEdit())}>
          <Edit profile={profile} />
        </Modal>

        <Bio
          profile={profile}
          followers={followers.length}
          following={following.length}
          showModal={() => dispatch(editProfile())}
        />
        <Stories />
      </div>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  const {
    profile, followers, following, showModal, dispatch,
  } = profileReducer;
  return {
    profile,
    followers,
    following,
    showModal,
    dispatch,
  };
};

export default connect(mapStateToProps)(Profile);
