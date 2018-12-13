import React from 'react';

import './Backdrop.scss';

const backDrop = ({ show, clicked }) => (show ? <div className="Backdrop" onClick={clicked} /> : null);

export default backDrop;
