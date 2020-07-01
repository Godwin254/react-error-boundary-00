import React, { Component } from 'react';
import { render } from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
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
