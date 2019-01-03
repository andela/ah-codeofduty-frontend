import axios from 'axios';
import { toast } from 'react-toastify';
import authUser from '../../../utils/authUser';
import { urls, headerObject } from '../../../apiEndpoints';
import {
  postReportFailure,
  postReportSuccess,
} from './actions/actions';

const { token } = authUser();

export const postReport = (slug, data) => (dispatch) => {
  axios
    .post(urls.REPORT_ARTICLE(slug), data, headerObject(token))
    .then((response) => {
      dispatch(postReportSuccess(response.data));
      toast.success('you have successfully Reported this article', { autoClose: 3500, hideProgressBar: true },
        { position: toast.POSITION.TOP_CENTER });
    })
    .catch((error) => {
      dispatch(postReportFailure(error.response));
      toast.error('An error has ocurred, please contact admin for details', { autoClose: 3500, hideProgressBar: true }, { position: toast.POSITION.TOP_CENTER });
    });
};

export default postReport;
