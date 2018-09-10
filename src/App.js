import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import GameLogicContainer from './components/GameLogicContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={ WelcomePage } />
          <Route path="/hangman" component={ GameLogicContainer } />
      </div>
    );
  }
}

export default App;