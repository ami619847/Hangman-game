import React, { PureComponent } from 'react';

export default class NewGameButton extends PureComponent {
  render() {
    return(
      <button onClick={ this.props.newGame }>New Game</button>
    )
  }
}
