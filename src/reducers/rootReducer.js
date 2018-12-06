import { combineReducers } from 'redux';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';
import socialLoginReducer from "../components/Authentication/Login/SocialLogin/socialLoginReducer";

export default combineReducers({
    authReducer, loginReducer, socialLoginReducer})
