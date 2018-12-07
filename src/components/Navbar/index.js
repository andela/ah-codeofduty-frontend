import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Index from "./components/Home";
// import Login from "./components/Login";
// import Profile from "./components/Profile/Profile";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li className="App-Logo">Authors' Haven</li>
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

        {/* <Route exact path="/" component={Index} /> */}
        {/* <Route path="/login/" component={Login} />
          <Route path="/profile" component={Profile} /> */}
      </div>
    );
  }
}

export default Home;
