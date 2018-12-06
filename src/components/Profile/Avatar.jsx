import React from 'react';

import './Components.scss';

const avatar = ({ title, source, alt }) => (
  <img className="Avatar" title={title} src={source} alt={alt} />
);

export default avatar;
