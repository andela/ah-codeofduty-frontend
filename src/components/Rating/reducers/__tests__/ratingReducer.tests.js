import ratingReducer, { initialState } from "../ratingReducer";
import {} from "../../actions/types";

describe("authreducer reducers", () => {
  it("should provide the initial state", () => {
    expect(ratingReducer(undefined, {})).toEqual(initialState);
  });
});
