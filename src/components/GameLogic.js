import * as React from 'react'
import * as game from '../lib/game'

export default function GameLogic(props) {
  //show the word and guesses and show wrong guesses
  if (!game.gameFinished(props.word, props.guesses) &&
  !game.wrongGuessLimit(props.word, props.guesses)) {
    return(
      <div>
        <p>Your guesses: { game.showGuess(props.word, props.guesses) }</p>
        <p>Wrong guesses: { game.wrongGuessCount(props.word, props.guesses) }</p>
      </div>
    )
  }

  //win statement
  else if (game.isWinner(props.word, props.guesses)) {
    return (
      <p>You won!</p>
    )
  }
    //lost statement
  else {
    return(
      <p>You lost!</p>
    )
  }
}
