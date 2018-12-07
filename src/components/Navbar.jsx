import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authUser from '../utils/authUser';
import LoginForm from './Authentication/LoginForm/LoginForm';

class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li className="App-Logo">Authors' Haven</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {authUser()
              ? (
                <li>
                <a onClick={() => localStorage.removeItem('user')} href="#">Logout</a>
              </li>
              ) : (
                <li>
                <a data-toggle="modal" data-target="#loginModal">Login</a>
              </li>
              )
      }
          </ul>
        </nav>
        <hr className="HR" />
        <LoginForm />
      </div>
    );
  }
}

export default Navbar;
