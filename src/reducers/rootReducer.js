import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer';
import ratingReducer from '../components/Rating/reducers/ratingReducer';

export default combineReducers({
  simpleReducer,
  authReducer,
  loginReducer,
  ratingReducer,
});
