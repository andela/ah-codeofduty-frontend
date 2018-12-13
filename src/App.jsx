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
import LikesDislikes from './components/like_unlike';

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
              <ProtectedRoute path="/profile" component={Profile} />
              <Route path="/likes" component={LikesDislikes} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
