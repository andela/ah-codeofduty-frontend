import ratingReducer, { initialState } from "../ratingReducer";
import { AVERAGE_RATING } from "../../actions/types";

describe("authreducer reducers", () => {
  it("should provide the initial state", () => {
    expect(ratingReducer(undefined, {})).toEqual(initialState);
  });
  it("should add data to the state", () => {
    expect(
      ratingReducer(initialState, { type: AVERAGE_RATING, payload: "" })
        .average_rating
    ).toEqual(undefined);
  });
});
