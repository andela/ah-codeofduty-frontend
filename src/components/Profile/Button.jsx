import React from 'react';

import './Components.scss';

const button = ({ children, clicked }) => (
  <button type="submit" className="Button" onClick={clicked}>
    {children}
  </button>
);

export default button;
