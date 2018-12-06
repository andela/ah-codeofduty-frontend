import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';

export default combineReducers({
  simpleReducer,
  loginReducer,
});
