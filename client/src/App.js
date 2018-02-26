import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
const Header = styled.div`
  color: red;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
