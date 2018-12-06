import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Index from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Authentication/Signup/Register';
import './App.scss';

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
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
