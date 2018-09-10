import * as React from 'react'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'

class MakeGuessFormContainer extends React.PureComponent {
  handleSubmit = (event) => {
    event.preventDefault()
    const [input] = event.target.children
    this.props.makeGuess(input.value)
    input.value = ""
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
          <input type="text" maxLength="1"/>
          <button type="submit" value="submit">submit</button> 
      </form>    
    )
  }
}

export default connect(null, { makeGuess })(MakeGuessFormContainer)