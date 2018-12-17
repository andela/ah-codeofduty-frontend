import {
  RATE_ARTICLE,
  RATING_FAILURE,
  CURRENT_RATING,
  AVERAGE_RATING
} from "../actions/types";

export const initialState = {
  average_rating: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RATE_ARTICLE:
      return {
        ...state,
        rating: action.payload
      };

    case CURRENT_RATING:
      return {
        ...state,
        current_rating: action.payload.rating
      };

    case AVERAGE_RATING:
      return {
        ...state,
        average_rating: action.payload.average_rating
      };

    case RATING_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
