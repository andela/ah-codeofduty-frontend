import React, { Component } from 'react';
import { connect } from 'react-redux';

import Bio from './Bio';
import Modal from '../Modal/Modal';
import Edit from './Edit/Edit';
import authUser from '../../utils/authUser';
import {
  getProfile,
  getFollow,
  editing,
  onEditProfile,
  onCancelEdit,
} from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    const user = authUser();
    const { username } = user;

    const { dispatch } = this.props;
    dispatch(getFollow(username, 'followers'));
    dispatch(getFollow(username, 'following'));
    dispatch(getProfile(username));
  }

  render() {
    const {
      profile, followers, following, showModal, dispatch,
    } = this.props;

    return (
      <div>
        <Modal show={showModal} cancel={() => dispatch(editing(onCancelEdit))}>
          <Edit profile={profile} />
        </Modal>

        <Bio
          profile={profile}
          followers={followers.length}
          following={following.length}
          showModal={() => dispatch(editing(onEditProfile))}
        />
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
