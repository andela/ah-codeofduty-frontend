import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
} from 'react-share';
import { FE_URL } from '../../utils/config';

export const cursorStyle = {
  cursor: 'pointer',
};
class SocialShare extends Component {
  componentDidMount() {
  }

  render() {
    const slug = localStorage.getItem('likeslug');
    const title = localStorage.getItem('ArticleTitle');
    return (
      <div id="social-sharing" className="collapse">
        <ul className="mr-auto mt-2 mt-lg-0">
          <li>
            <WhatsappShareButton
              url={`${FE_URL}/article/${slug}`}
              className="share-icons"
              title={title}
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
              title={title}
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
              quote={title}
              style={cursorStyle}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </li>
          <li>
            {' '}
            <EmailShareButton
              url={`${FE_URL}/article/${slug}`}
              title={title}
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

export default SocialShare;
