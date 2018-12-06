import AgentAPI from '../../../AgentAPI';

const sendLoginRequest = ({ email, password }) => AgentAPI.postAgent({ email, password });

export default sendLoginRequest;
