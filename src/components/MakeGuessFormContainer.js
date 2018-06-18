import * as React from 'react'
import MakeGuessForm from './MakeGuessForm'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class MakeGuessFormContainer extends React.PureComponent {
  makeGuess = (guesses) => {
    this.props.makeGuess({
      type: 'MAKE_GUESS',
      payload: { ...guesses }
    })
  }

  render() {
    return <MakeGuessForm makeGuess={ this.makeGuess } />
  }
}

export default connect()(MakeGuessFormContainer)
