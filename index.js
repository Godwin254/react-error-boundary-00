import React, { Component } from 'react';
import { render } from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import TestComponent from './components/TestComponent'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
       <ErrorBoundary>
        <TestComponent />
       </ErrorBoundary>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
