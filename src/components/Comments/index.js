import React from 'react';
import DisqusThread from './DisqusThread.js';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <DisqusThread
          id="e94d73ff-fd92-467d-b643-c86889f4b8be"
          title="How to integrate Disqus into ReactJS App"
          path="/blog/123-disquss-integration"
        />
      </div>
    );
  }
}

export default MyComponent;