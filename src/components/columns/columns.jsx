import React from 'react';

const columns = ({ follow, classes, stats }) => {
  const classNames = `col-xs-6 p-2 text-center ${classes}`;
  return (
    <div className={classNames}>
      <h6>{stats}</h6>
      <h6 className="pt-2">{follow}</h6>
    </div>
  );
};

export default columns;
