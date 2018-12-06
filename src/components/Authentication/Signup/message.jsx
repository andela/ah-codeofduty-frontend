import React from 'react';

const message = ({ ...props }) => {
  const { message, success } = props;

  const messs = message.map(mess => (
    <div
      className={success ? 'alert alert-success' : 'alert alert-danger'}
      role="alert"
    >
      {mess}
    </div>
  ));
  return <div>{messs}</div>;
};

export default message;
