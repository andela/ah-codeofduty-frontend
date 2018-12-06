import React, { Component } from 'react';
import { connect } from 'react-redux';

import Bio from './Bio';
import Stories from './Stories/Stories';
import Modal from '../Modal/Modal';
import Edit from './Edit/Edit';
import {
  getProfile,
  getFollowers,
  getFollowing,
  editProfile,
  cancelEdit,
} from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiaWF0IjoxNTQzOTkxODI2fQ.2B8_Rz9OgCTo6U2u_fP7j8GgwOHMAf-yQ0Lnu4wn6rg';
    const user = 'user';
    const { dispatch } = this.props;
    dispatch(getFollowers(user, token));
    dispatch(getFollowing(user, token));
    dispatch(getProfile(user));
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
