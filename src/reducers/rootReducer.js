import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';
import userEmail from '../components/PasswordReset/reducer';
import newPassword from '../components/PasswordResetForm/reducers';

export default combineReducers({
  simpleReducer,
  userEmail,
  newPassword,
  authReducer,
  loginReducer,
});
