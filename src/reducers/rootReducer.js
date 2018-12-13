import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';
import socialLoginReducer from "./socialLoginReducer";
import profileReducer from './profileReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
  simpleReducer, authReducer, loginReducer, socialLoginReducer, profileReducer, articlesReducer,
});
