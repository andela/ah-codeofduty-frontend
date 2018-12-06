import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';

export default combineReducers({
  simpleReducer, authReducer, loginReducer,

});
