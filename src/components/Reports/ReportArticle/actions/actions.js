import {
  REPORT_POST_SUCCESS,
  REPORT_POST_FAILURE,
} from './types';


export const postReportSuccess = payload => ({
  type: REPORT_POST_SUCCESS,
  payload,
});

export const postReportFailure = payload => ({
  type: REPORT_POST_FAILURE,
  payload,
});
