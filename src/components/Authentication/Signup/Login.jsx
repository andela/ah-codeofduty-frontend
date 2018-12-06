import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Navbar';
import { registerUser } from './actions';
import Message from './message';

class Register extends Component {
  render() {