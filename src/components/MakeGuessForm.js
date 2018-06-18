import React, { PureComponent } from 'react';
import { showGuess } from '../lib/game';

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

    this.props.makeGuess(this.props.word, this.props.guesses)
  }

  render() {
    return (
      <div>
        <br/><br/>
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
