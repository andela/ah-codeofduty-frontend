import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import '../../App.scss';

import authUser from '../../utils/authUser';
import LoginForm from '../Authentication/LoginForm/LoginForm';

class Navbar extends Component {
  render() {
    return (

      <nav
        className="navbar navbar-expand-lg navbar-light bg-light font-raleway"
        id="navbar_home"
      >
        <a
          className="logo pl-1 pr-4 mr-3 text-large font-weight-bold App-Logo"
          href="/"
        >
          Authors' Haven
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
          <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="search-input">
                <span className="fa fa-search search" id="search" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <input
                      className="form-control"
                      id="myInput"
                      type="text"
                      placeholder="Filter.."
                    />
                    <li className="pl">
                      <a href="/" />
                      Author
                    </li>
                    <li className="pl">
                      <a href="/" />
                      Title
                    </li>
                    <li className="pl">
                      <a href="/" />
                      Tag
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {authUser()
              ? (
                <React.Fragment>
                  <li className='login-li-nav'>
                    <Link to="/profile">Profile</Link>
                  </li>
                <li id="login-nav" className='login-li-nav'>
                <a onClick={
                  () => localStorage.removeItem('user')
                  } href="/">Logout</a>
              </li>
              </React.Fragment>
              ) : (
                <React.Fragment>
                  <li id="login-nav" className='login-li-nav'>
                    <a data-toggle="modal" data-target="#loginModal">Login</a>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-toggle="modal"
                      data-target="#register_modal"
                    >
                      Register
                    </button>
                  </li>
                </React.Fragment>
              )}
          </ul>
        </div>
        <LoginForm />
      </nav>


    );
  }
}

export default Navbar;
