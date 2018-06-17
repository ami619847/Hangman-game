import React, { PureComponent } from 'react';
import { makeGuess } from '../actions/game';
//import { isWinner } from '../lib/game';

//props and state
export default class MakeGuessForm extends React.PureComponent {

  handleChange = (event) => {
    const value = event.target.value;
    const guess = event.target.guess;

    this.setState({
      [guess]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeGuess(this.state.guesses)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>Your guess:
            <br/>
            <input type="text" guess="guess" maxLength="1" onChange={ this.handleChange } />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
