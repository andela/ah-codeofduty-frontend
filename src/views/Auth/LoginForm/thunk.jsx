import axios from 'axios';

const API_ROUTE = 'https://ah-codeofduty-staging.herokuapp.com/api';

class AgentAPI {
  static postAgent({ email, password }) {
    return axios.post(`${API_ROUTE}/users/login/`, { email, password });
  }
}

const sendLoginRequest = ({ email, password }) => AgentAPI.postAgent({ email, password });

export default sendLoginRequest;
