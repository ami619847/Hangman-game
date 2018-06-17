import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import GameLogicContainer from './components/GameLogicContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HANGMAN</h1>
        </header>
        <main>
          <Route exact path="/" component={ WelcomePage } />
          <Route path="/hangman" component={ GameLogicContainer } />
        </main>
      </div>
    );
  }
}

export default App;
