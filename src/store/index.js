import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {logger} from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ logger, thunk ];

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

export default store;
