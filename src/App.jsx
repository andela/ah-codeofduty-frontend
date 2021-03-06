import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Index from './components/Home/Home';
import Login from './components/Authentication/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Authentication/Signup/Register';
import Profile from './components/Profile/Profile';
import './App.scss';
import ProtectedRoute from './views/Auth/ProtectedRoute';
import CreateArticle from './components/Articles/createArticle';
import Articles from './components/Articles/articles';
import EditArticle from "./components/Articles/editArticle";
import Comments from  './components/Comments/index'
import PasswordReset from "./components/PasswordReset";
import PasswordResetForm from "./components/PasswordResetForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Register />

            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/login/" component={Login} />
              <ProtectedRoute exact path="/comments/" component={Comments} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/new_article" component={CreateArticle} />
              <Route path="/articles" component={Articles} />
              <Route exact path="/article/:slug" component={EditArticle} />
              <Route path="/resetpassword" component={PasswordReset} />
              <Route path="/reset-password" name="token" component={PasswordResetForm} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
