import {
  REPORT_POST_SUCCESS,
  REPORT_POST_FAILURE,
  SHOW_REPORT_MODAL,
} from './actions/types';

export const initialState = {
  isReportPostSuccess: false,
  isReportPostFailure: false,
  reports: [],
  errors: [],
  show: false,
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_POST_SUCCESS:
      return {
        ...state,
        isReportPostFailure: false,
        isReportPostSuccess: true,
      };
    case REPORT_POST_FAILURE:
      return {
        ...state,
        isReportPostFailure: true,
        errors: action.payload,
      };
    case SHOW_REPORT_MODAL:
      return {
        ...state,
        show: true,
      };
    default:
      return state;
  }
};

export default reportReducer;
