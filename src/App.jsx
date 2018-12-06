import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
import Index from './components/Home/Home';
import Login from './components/Authentication/LoginForm/LoginForm';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li className="App-logo">Authors' Haven</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login/">Login</Link>
              </li>
              <li>
                <Link to="/profile/">Profile</Link>
              </li>
            </ul>
          </nav>
          <hr className="HR" />
          <Route exact path="/" component={Index} />
          <Route path="/login/" component={Login} />
          <Route path="/profile" component={Profile} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
