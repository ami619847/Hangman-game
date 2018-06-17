import React, { PureComponent } from 'react';
import { newGame } from '../actions/game';

export default class NewGameButton extends PureComponent {
  render() {
    return(
      <button onClick={ this.props.newGame }>New Game</button>
    )
  }
}
