import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import profileReducer from './profileReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
  simpleReducer,
  profileReducer,
  articlesReducer,
});
