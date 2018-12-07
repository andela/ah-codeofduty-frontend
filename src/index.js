import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import store from './store';

ReactDOM.render(
  <Provider store={store}>
=======
import configureStore from './store/index';

ReactDOM.render(
  <Provider store={configureStore()}>
>>>>>>> Feature(reset password)# reset password
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
