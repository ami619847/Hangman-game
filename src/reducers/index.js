import { combineReducers } from 'redux'
import guesses from './guesses'
import word from './word'

export default combineReducers({
  guesses, 
  word
})