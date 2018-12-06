import React from 'react';

import './Bio.scss';
import Avatar from './Avatar';
import Button from './Button';

const bio = ({
  profile, following, followers, showModal,
}) => {
  const { username, surname, last_name } = profile;
  let { avatar } = profile;
  if (avatar === '') {
    avatar = 'https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
  }

  return (
    <div className="Bio">
      <div className="row">
        <div className="col-md-4">
          <Avatar title="Edit Profile Picture?" source={avatar} alt={username} />
        </div>
        <div className="col-md-4 mt-4">
          <h4 className="ml-4 pl-3">
            {surname}
            {' '}
            {last_name}
          </h4>
          <p className="text-muted text-center">{username}</p>

          <div className="row text-center mx-1 mt-2">
            <div className="col-xs-6 mr-3 p-2">
              <h6>{following}</h6>
              <h6 className="pt-2">following</h6>
            </div>
            <div className="col-xs-6 p-2">
              <h6>{followers}</h6>
              <h6 className="pt-2">followers</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 edit">
          <Button clicked={showModal}>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default bio;
