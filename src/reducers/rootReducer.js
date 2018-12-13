import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer';
import socialLoginReducer from "./socialLoginReducer";
import profileReducer from './profileReducer';
import { articleReducer } from './articleReducer';
import articlesReducer from './articlesReducer';
import likeDislikeReducer from '../components/like_unlike/reducer';

export default combineReducers({
  simpleReducer,
  authReducer,
  loginReducer,
  profileReducer,
  articleReducer,
  socialLoginReducer,
  articlesReducer,
  likeDislikeReducer,
});
