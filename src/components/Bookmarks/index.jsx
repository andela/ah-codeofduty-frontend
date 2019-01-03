import React from 'react';
import PropTypes from 'prop-types';
import './bookmark.scss';

const BookmarkArticles = ({ onBookmarkClick, bookmark }) => (
  <div>
    <button className="bookmark" type="submit" onClick={onBookmarkClick}>
      <i className="fa fa-bookmark" id="bookmark">
        {bookmark ? '' : ''}
      </i>
    </button>
  </div>
);

BookmarkArticles.PropTypes = {
  onBookmarkClick: PropTypes.func.isRequired,
  bookmark: PropTypes.string.isRequired,
};

export default BookmarkArticles;
