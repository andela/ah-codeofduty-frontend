import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import Avatar from '../Avatar';
import { saveProfile } from '../../../actions/profileActions';
import './Edit.scss';

class Edit extends Component {
  state = {
    surname: '',
    last_name: '',
    bio: '',
    avatar: '',
    username: '',
  };

  componentDidMount() {
    const { surname, last_name, bio } = this.props.profile;
    let { avatar } = this.props.profile;
    if (avatar === '') {
      //TODO: store this in environment variable
      avatar =
        'https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
    }

    this.setState({ ...this.state, surname, last_name, bio, avatar });
  }

  updateInputValue = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(saveProfile(this.state));
  };

  render() {
    return (
      <div className="Edit">
        <Avatar
          className="text-center"
          title="Edit Profile Picture?"
          source={this.state.avatar}
          alt={this.state.username}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            required
            name="surname"
            id="surname"
            type="text"
            placeholder="First Name"
            value={this.state.surname}
            onChange={this.updateInputValue}
          />
          <br />
          <input
            required
            name="last_name"
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.updateInputValue}
          />
          <br />
          <textarea
            name="bio"
            id="bio"
            type="text"
            placeholder="Bio"
            onChange={this.updateInputValue}
            value={this.state.bio}
          />

          <br />
          <Button>Save</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  const { dispatch } = profileReducer;
  return {
    dispatch,
  };
};

export default connect(mapStateToProps)(Edit);
