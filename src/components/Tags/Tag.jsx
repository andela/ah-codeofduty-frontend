import React from 'react';

const tag = ({ children, clicked }) => (
  <span className="Tag" onClick={clicked}>
    {children}
  </span>
);

export default tag;
