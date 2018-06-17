import React, { PureComponent } from 'react';
import { makeGuess } from '../actions/game';

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

    if (this.props.guesses !== event.target.value) {
      this.props.makeGuess(event.target.value)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Your guess:
            <br/>
            <input type="text" guess="guess" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>)
    }
  }
