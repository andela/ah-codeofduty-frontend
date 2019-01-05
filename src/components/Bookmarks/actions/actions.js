import axios from 'axios';
import { toast } from 'react-toastify';
import { BOOKMARK_ARTICLE, BOOKMARK_ARTICLE_FAILURE } from './types';
import { STAGING_URL } from '../../../utils/config';
import authUser from '../../../utils/authUser';
import { headerObject } from '../../../apiEndpoints';

const { token } = authUser();

export const bookmark = () => ({
  type: BOOKMARK_ARTICLE,
});

export const bookmarkingFailed = error => ({
  type: BOOKMARK_ARTICLE_FAILURE,
  error,
});

export const bookmarkArticle = slug => (dispatch) => {
  const url = `${STAGING_URL}/articles/${slug}/bookmark/`;
  axios
    .put(url, {}, headerObject(token))
    .then((response) => {
      if (response.data.message === 'Article bookmarked!') {
        dispatch(bookmark(response.data.message));
        toast.success(
          'Article added to bookmarks',
          { autoClose: 1500, hideProgressBar: true },
          { position: toast.POSITION.TOP_CENTER },
        );
      } else {
        toast.success(
          'Article removed from bookmarks',
          { autoClose: 1500, hideProgressBar: true },
          { position: toast.POSITION.TOP_CENTER },
        );
      }
    })
    .catch((error) => {
      dispatch(bookmarkingFailed(error.response.data));
    });
};
