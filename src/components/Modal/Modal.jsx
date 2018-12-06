import React from 'react';

import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/Aux';

const modal = ({ show, cancel, children }) => (show ? (
  <Aux>
    <Backdrop show={show} clicked={cancel} />
    <div className="Modal" style={{ transform: show ? 'translateY(0)' : 'translateY(360)' }}>
      {children}
    </div>
  </Aux>
) : null);

export default modal;
