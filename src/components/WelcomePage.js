import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage (props) {
  return (

    <div className="welcome-page">
      <h3>Welcome to the game</h3>
      <Link to="/hangman">Start Playing!</Link>
    </div>
  )
}
