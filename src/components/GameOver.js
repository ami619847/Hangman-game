import * as React from 'react';
import hangmanGif from '../images/hangmanGif.gif';

export default class GameOver extends React.PureComponent {
    render() {
        return(
            <div>
                <h3>YOU LOST!</h3>
                <img src={hangmanGif} alt="hangmanGif" />
            </div>
        )
    }
}