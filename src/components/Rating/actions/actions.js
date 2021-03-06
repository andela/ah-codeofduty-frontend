import axios from 'axios';
import {
  RATE_ARTICLE,
  RATING_FAILURE,
  CURRENT_RATING,
  AVERAGE_RATING,
} from './types';
import { STAGING_URL, headerObject } from '../../../utils/config';
import authUser from '../../../utils/authUser';

const { token } = authUser();

export const addRating = rate => ({
  type: RATE_ARTICLE,
  rate,
});

export const currentRating = response => ({
  type: CURRENT_RATING,
  payload: { rating: response === undefined ? 0 : response },
});

export const averageRating = response => ({
  type: AVERAGE_RATING,
  payload: { average_rating: response === undefined ? 0 : response },
});

export const ratingFailed = error => ({
  type: RATING_FAILURE,
  error,
});

export const initialRate = data => (dispatch) => {
  const url = `${STAGING_URL}/articles/${data}/`;

  axios.get(url, headerObject(token)).then((response) => {
    const articleData = response.data.rating || 0;
    dispatch(currentRating(articleData));
  });
};

export const avgRate = data => (dispatch) => {
  const url = `${STAGING_URL}/articles/${data}/`;
  axios.get(url, headerObject(token)).then((response) => {
    const articleData = response.data.average_rating || 0;
    dispatch(averageRating(articleData));
  });
};

export const rateArticle = data => (dispatch) => {
  const url = `${STAGING_URL}/articles/${data.slug}/rate/`;
  axios
    .post(
      url,
      (data = {
        rating: data.rate,
      }),
      headerObject(token),
    )
    .then((response) => {
      if (response.status === 201) {
        dispatch(averageRating(response.data.article.average_rating));
        dispatch(currentRating(response.data.rating));
      }
    })
    .catch((error) => {
      dispatch(ratingFailed(error.response.data.errors));
    });
};
