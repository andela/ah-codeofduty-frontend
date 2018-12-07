import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import userEmail from '../components/PasswordReset/reducer';
import newPassword from '../components/PasswordResetForm/reducers';

export default combineReducers({
  simpleReducer,
  userEmail,
  newPassword,
});
