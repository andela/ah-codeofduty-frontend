import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

import ProtectedRoute from './views/Auth/ProtectedRoute';

import Index from './components/Home/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPasword';

const App = () => (
  <Provider store ={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path ="/reset-password" component={ResetPassword}/>
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
