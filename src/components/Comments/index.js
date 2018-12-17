import React from 'react';
import DisqusThread from './DisqusThread.js';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <DisqusThread
          id="e94d73ff-fd92-467d-b643-c86889f4b8be"
          title="Author's Haven comments"
          path="/article/"
        />
      </div>
    );
  }
}

export default MyComponent;