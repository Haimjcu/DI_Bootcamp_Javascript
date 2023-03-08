import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import Color from './Colorex3';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="box" >
        <Color />
      </div>

  );

  }

}

export default App;
