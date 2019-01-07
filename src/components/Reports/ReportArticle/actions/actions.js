import {
  REPORT_POST_SUCCESS,
  REPORT_POST_FAILURE,
  SHOW_REPORT_MODAL,
} from './types';


export const postReportSuccess = payload => ({
  type: REPORT_POST_SUCCESS,
  payload,
});

export const postReportFailure = payload => ({
  type: REPORT_POST_FAILURE,
  payload,
});

export const showModal = () => ({
  type: SHOW_REPORT_MODAL,
});
