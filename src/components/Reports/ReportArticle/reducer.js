import {
  REPORT_POST_SUCCESS,
  REPORT_POST_FAILURE,
} from './actions/types';

export const initialState = {
  isReportPostSuccess: false,
  isReportPostFailure: false,
  reports: [],
  errors: [],
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
    default:
      return state;
  }
};

export default reportReducer;
