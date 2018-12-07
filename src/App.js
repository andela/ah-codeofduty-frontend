import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Index from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PasswordReset from './components/PasswordReset';
import PasswordResetForm from './components/PasswordResetForm';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/login/" component={Login} />
        <Route path="/resetpassword" component={PasswordReset} />
        <Route path="/reset-password" name="token" component={PasswordResetForm} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
