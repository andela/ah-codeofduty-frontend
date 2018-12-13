import expect from "expect";
import * as actions from "./actions";
import * as types from "./constants";
import * as action from "../PasswordReset/actions";
import * as type from "../PasswordReset/constants";
const test = (type, action) => {
  const expected = { type };
  expect(action).toEqual(expected);
};
describe("Reset saved password in database", () => {
  it("reset password failure", () => {
    test(
      types.RESET_PASSWORD_ACTION_FAILURE,
      actions.resetPasswordActionFailure()
    );
  });
  it("reset password sucess", () => {
    test(
      types.RESET_PASSWORD_ACTION_SUCCESS,
      actions.resetPasswordActionSuccess()
    );
  });
  it("reset password", () => {
    test(types.RESET_PASSWORD_ACTION, actions.resetPasswordAction());
  });

  it("forgot pass failure", () => {
    test(type.RESET_PASSWORD_FAILURE, action.resetPasswordFailure());
  });
  it("forgot pass sucess", () => {
    test(type.RESET_PASSWORD_SUCCESS, action.resetPasswordSuccess());
  });
  it("forgot pass", () => {
    test(type.RESET_PASSWORD, action.resetPassword());
  });
});
