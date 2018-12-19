import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import authReducer from "../components/Authentication/Signup/reducers/authReducer";
import loginReducer from "../views/Auth/LoginForm/reducer.jsx";
import socialLoginReducer from "./socialLoginReducer";
import profileReducer from "./profileReducer";
import { articleReducer } from './articleReducer';
import ratingReducer from "../components/Rating/reducers/ratingReducer";
import commentReducer from '../components/Commenter/reducer'


export default combineReducers({
  simpleReducer,
  authReducer,
  loginReducer,
  socialLoginReducer,
  profileReducer,
  articleReducer,
  ratingReducer,
  commentReducer,
});
