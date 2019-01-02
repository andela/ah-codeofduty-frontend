import axios from 'axios';
import { urls } from '../../../apiEndpoints';

class AgentAPI {
  static postAgent({ email, password }) {
    return axios.post(urls.LOGIN, { email, password });
  }
}

const sendLoginRequest = ({ email, password }) => AgentAPI.postAgent({ email, password });

export default sendLoginRequest;
