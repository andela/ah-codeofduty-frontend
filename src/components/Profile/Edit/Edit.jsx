import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageUpLoader from 'react-images-upload';

import Button from '../Button';
import Avatar from '../Avatar';
import Input from '../../Input/Input';
import inputValues from '../../../utils/inputValues';
import { saveProfile } from '../../../actions/profileActions';
import './Edit.scss';

class Edit extends Component {
  state = {
    surname: '',
    last_name: '',
    bio: '',
    avatar: '',
    username: '',
    showUploadImage: false,
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
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(saveProfile(this.state));
  };

  showUpload = () => {
    this.setState({ ...this.state, showUploadImage: true });
  };

  onDrop = picture => {
    this.setState({
      ...this.state,
      avatarFile: picture[picture.length - 1],
      showUploadImage: false,
    });
    const data = new FormData();
    data.append('file', picture[picture.length - 1]);
    data.append('api_key', '351366517116641');
    data.append('upload_preset', 'eieibqqp');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.cloudinary.com/v1_1/dvsjl8d7p/image/upload', false);
    xhr.send(data);
    const imageResponse = JSON.parse(xhr.responseText);
    this.setState({ ...this.state, avatar: imageResponse.url });
  };

  render() {
    const imageUpload = this.state.showUploadImage ? (
      <ImageUpLoader
        withIcon={true}
        buttonText="Add an image"
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
    ) : null;
    return (
      <div className="Edit">
        <Avatar className="text-center" source={this.state.avatar} alt={this.state.username} />

        <span onClick={this.showUpload} title="Edit Profile Picture?" className="editAvatarIcon">
          &#9998;
        </span>
        {imageUpload}

        <form id="editForm" onSubmit={this.handleSubmit}>
          <Input
            id="surname"
            values={inputValues('surname', 'text', 'First Name', this.state.surname)}
            changed={this.updateInputValue}
          />
          <Input
            values={inputValues('last_name', 'text', 'Last Name', this.state.last_name)}
            changed={this.updateInputValue}
          />
          <textarea
            name="bio"
            type="text"
            placeholder="Tell us about yourself in less than 100 characters..."
            onChange={this.updateInputValue}
            value={this.state.bio}
            maxLength="100"
          />
          <Button className="saveButton">Save</Button>
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

export { Edit as EditTest};