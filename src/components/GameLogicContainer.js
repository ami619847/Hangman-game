import * as React from 'react';
import { connect } from 'react-redux';
import GameLogic from './GameLogic';
import { newGame } from '../actions/game';
import MakeGuessFormContainer from './MakeGuessFormContainer';
import NewGameButton from './NewGameButton';

class GameLogicContainer extends React.PureComponent {

  render() {
    return(
      <div>
        <GameLogic word={ this.props.game.word} guesses={this.props.game.guesses} />
        <MakeGuessFormContainer />
        <br/>
        <NewGameButton />
      </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    game:state.game
  }
}

export default connect(mapStateToProps)(GameLogicContainer)
