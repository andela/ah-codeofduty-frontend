import { mount, shallow } from 'enzyme';
import {PasswordResetForm} from './index';
import {PasswordReset} from '../PasswordReset/index';
import React from 'react';
import expect from "expect";
import * as actions from "./actions";
import * as types from "./constants";
import * as action from "../PasswordReset/actions";
import * as type from "../PasswordReset/constants";
const test = (type, action) => {
  const expected = { type };
  expect(action).toEqual(expected);
};
const myProps = {
  location: {
    hash: "",
    pathname: "/reset-password",
    search: "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjUyOC01MGVjMGQ3NjhkMTFjZWVmMjZmYSIsImVtYWlsIjoiamFtZXMua2l0aHUyQGdtYWlsLmNvbSIsImlhdCI6MTU0NTE0MzY4NSwiZXhwIjoxNTQ1MTQ3Mjg1fQ.xQFI569z4R1-4lMExKypi6xS3N2g79HOsctw5JqFGnM/",
    state: undefined
  }
};
const wrapper = mount(<PasswordResetForm {...myProps}/>)
describe("Reset saved password in database", () => {
  it("renders successfully", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("renders resetpassword correctly",()=>{
    shallow(<PasswordReset />);
  })
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

