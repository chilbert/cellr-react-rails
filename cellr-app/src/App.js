import React, { Component } from 'react';
import './App.css';
import WineryContainer from './components/WineryContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Wineries List</h1>
        </div>
        <WineryContainer />
      </div>
    );
  }
}

export default App;