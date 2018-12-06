import axios from 'axios';

const API_ROUTE = 'https://ah-codeofduty-staging.herokuapp.com/api';

class AgentAPI {
  static postAgent({ email, password }) {
    return axios.post(`${API_ROUTE}/users/login/`, { email, password });
  }
}

export default AgentAPI;
