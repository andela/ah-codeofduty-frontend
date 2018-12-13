import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';
import profileReducer from './profileReducer';
import articlesReducer from './articlesReducer';
import likeDislikeReducer from '../components/like_unlike/reducer';

export default combineReducers({
  simpleReducer,
  authReducer,
  loginReducer,
  profileReducer,
  articlesReducer,
  likeDislikeReducer,
});
