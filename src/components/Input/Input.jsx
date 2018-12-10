import React from 'react';
import Aux from '../../hoc/Aux';

const input = ({ changed, values }) => {
  const {
    name, type, placeholder, value,
  } = values;
  return (
    <Aux>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changed}
      />
      <br />
    </Aux>
  );
};

export default input;
