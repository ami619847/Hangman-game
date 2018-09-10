import React, { PureComponent } from 'react';
import { newGame } from '../actions/game';
import { connect } from 'react-redux';

class NewGameButton extends PureComponent {
  render() {
    return(
      <button onClick={ this.props.newGame }>play again</button>
    )
  }
}

export default connect(null, {newGame})(NewGameButton) 