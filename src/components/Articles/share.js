import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
} from 'react-share';
import { FE_URL } from '../../utils/config';

class SocialShare extends Component {
  componentDidMount() {
  }

  render() {
    const slug = localStorage.getItem('likeslug');
    const cursorStyle = {
      cursor: 'pointer',
    };
    return (
      <div id="social-sharing">
        <ul className="mr-auto mt-2 mt-lg-0">
          <li>
            <WhatsappShareButton
              url={`${FE_URL}/article/${slug}`}
              className="share-icons"
              style={cursorStyle}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </li>
          <li>
            {' '}
            <TwitterShareButton
              url={`${FE_URL}/article/${slug}`}
              className="share-icons"
              style={cursorStyle}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </li>
          <li>
            {' '}
            <FacebookShareButton
              url={`${FE_URL}/article/${slug}`}
              className="share-icons"
              style={cursorStyle}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </li>
          <li>
            {' '}
            <EmailShareButton
              url={`${FE_URL}/article/${slug}`}
              style={cursorStyle}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </li>
        </ul>
      </div>
    );
  }
}

SocialShare.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default SocialShare;
