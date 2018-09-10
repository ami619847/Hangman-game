import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function WelcomePage (props) {
  return (
    <div className="App">
      <header className="App-header">
        <br/><br/><br/>
        <h1 className="App-title">HANGMAN</h1>
      </header>
      <br/><br/>
      <main>
        <h1>welcome to the game</h1>
        {/* <ul>  */}
          <li>guess the random word</li>
          <li>only 6 wrong guesses</li>
        {/* </ul> */}
        <br/><br/><br/><br/>
        <h3><Link to="/hangman">START</Link></h3>
        <br/>
      </main>
    </div>
  )
}
