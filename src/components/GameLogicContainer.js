import * as React from 'react';
import { showGuess, isWinner, gameFinished, wrongGuessLimit, wrongGuessCount } from '../lib/game';
import MakeGuessFormContainer from './MakeGuessFormContainer';
import GameOver from './GameOver';
import NewGameButton from './NewGameButton';
import { connect } from 'react-redux';

class GameLogicContainer extends React.PureComponent {
  render() {
    return(
      <div>
        <header className="App-header"></header>
        <main>
          <h1 className="App-title">{showGuess(this.props.word, this.props.guesses).toUpperCase()}</h1>
          <br/>
          <p>make a guess: </p>
          <MakeGuessFormContainer/>
          <br/>
          <h3>{wrongGuessCount(this.props.word, this.props.guesses)}/6</h3>
          <div>
            {isWinner(this.props.word, this.props.guesses) && <h3>YOU WON!</h3>}
            {
              gameFinished(this.props.word, this.props.guesses) && 
              wrongGuessLimit(this.props.word, this.props.guesses) && 
              <GameOver />
            }
          </div>
          <br/>
          <NewGameButton />
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(GameLogicContainer)