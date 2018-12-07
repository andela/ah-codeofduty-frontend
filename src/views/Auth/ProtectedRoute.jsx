import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import authUser from '../../utils/authUser';


const ProtectedRoute = props => (
  authUser()
    ? (
      <Route {...props} />
    ) : (
      <Redirect to="/" />
    )
);


ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default ProtectedRoute;
