import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pipeline jenkins con docker</h1>
          <div>Web modificada</div>
        </header>
        <p className="App-intro">
          INFO 282
        </p>
      </div>
    );
  }
}

export default App;
