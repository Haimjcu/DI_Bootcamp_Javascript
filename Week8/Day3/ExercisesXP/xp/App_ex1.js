import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import BuggyCounter from './BuggyCounter';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="box" >
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <BuggyCounter />
      </div>

  );

  }

}

export default App;
