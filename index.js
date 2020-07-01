import React, { Component } from 'react';
import { render } from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
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
       
       </ErrorBoundary>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
