import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
<<<<<<< HEAD
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';

export default combineReducers({
  simpleReducer, authReducer, loginReducer,

=======
import userEmail from '../components/PasswordReset/reducer';
import newPassword from '../components/PasswordResetForm/reducers';

export default combineReducers({
  simpleReducer,
  userEmail,
  newPassword,
>>>>>>> Feature(reset password)# reset password
});
