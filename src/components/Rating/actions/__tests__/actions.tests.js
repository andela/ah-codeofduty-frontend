import {
  addRating,
  currentRating,
  averageRating,
  ratingFailed
} from "../actions";
import {
  CURRENT_RATING,
  AVERAGE_RATING,
  RATING_FAILURE,
  RATE_ARTICLE
} from "../types";

describe("action creators", () => {
  it("Should dispatch RATE_ARTICLE type", () => {
    expect(addRating({}).type).toEqual(RATE_ARTICLE);
  });
  it("Should dispatch CURRENT_RATING type", () => {
    expect(currentRating({}).type).toEqual(CURRENT_RATING);
  });
  it("should expect AVERAGE_RATING type", () => {
    expect(averageRating({}).type).toEqual(AVERAGE_RATING);
  });
  it("should expect RATING_FAILURE type", () => {
    expect(ratingFailed({}).type).toEqual(RATING_FAILURE);
  });
});
