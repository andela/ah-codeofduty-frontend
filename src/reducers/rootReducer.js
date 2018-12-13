import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import loginReducer from '../views/Auth/LoginForm/reducer.jsx';
import profileReducer from './profileReducer';
import articlesReducer from './articlesReducer';
import followUnfollowReducer from '../components/FollowUnfollow/reducer';

export default combineReducers({
  simpleReducer,
  authReducer,
  loginReducer,
  profileReducer,
  articlesReducer,
  followUnfollowReducer,
});
