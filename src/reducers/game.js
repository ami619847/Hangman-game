import NEW_GAME from '../actions/game'
import MAKE_GUESS from '../actions/game'

const initialState = {
  word: '',
  guesses: []
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'NEW_GAME':
    return
      action.payload

  case 'MAKE_GUESS':
    return {
      ...state,
      //action.payload.guesses
      guesses: state.guesses.concat(action.payload)
    }

  default:
    return state
  }
}

export default reducer