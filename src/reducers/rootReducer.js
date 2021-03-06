import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer';
import socialLoginReducer from './socialLoginReducer';
import profileReducer from './profileReducer';
import { articleReducer } from './articleReducer';
import ratingReducer from '../components/Rating/reducers/ratingReducer';
import userEmail from '../components/PasswordReset/reducer';
import newPassword from '../components/PasswordResetForm/reducers';
import likeDislikeReducer from '../components/like_unlike/reducer';
import tagsReducer from './tagsReducer';
import bookmarkReducer from '../components/Bookmarks/reducers/bookmarkReducer';
import homeReducer from './homeReducer';
import reportReducer  from  '../components/Reports/ReportArticle/reducer';

export default combineReducers({
  simpleReducer,
  authReducer,
  loginReducer,
  socialLoginReducer,
  profileReducer,
  articleReducer,
  likeDislikeReducer,
  tagsReducer,
  ratingReducer,
  homeReducer,
  userEmail,
  newPassword,
  reportReducer,
  bookmarkReducer,
});
