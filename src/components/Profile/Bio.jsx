import React from 'react';

import './Bio.scss';
import Avatar from './Avatar';
import Button from './Button';
import Columns from '../columns/columns';

const bio = ({
  profile, following, followers, showModal,
}) => {
  const {
    username, surname, last_name, bio,
  } = profile;
  let { avatar } = profile;
  if (avatar === '') {
    avatar = 'https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
  }

  return (
    <div className="Bio">
      <div className="text-center ">
        <div className="row">
          <div className="col-xs-8 bio-data">
            <Avatar title={username} source={avatar} alt={username} />
            <span className="nameText">
              <h4 className="mt-4">
                {surname}
                {' '}
                {last_name}
              </h4>
            </span>

            <p className="text-center text-muted bio-text">{bio}</p>
          </div>
        </div>
        <div className="col-xs-1">
          <Button className="editProfileButton" clicked={showModal}>
            Edit Profile
          </Button>
        </div>
      </div>
      <div className="row mt-3 follow-row">
        <Columns follow="following" classes="bio-following follow-data" stats={following} />
        <Columns follow="followers" stats={followers} />
      </div>
    </div>
  );
};

export default bio;
