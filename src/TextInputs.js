import React, {Component} from 'react'

class TextInputs extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return (
            <form name='meme' onSubmit={this.props.onSubmit} >
                <input for='meme' name='top' placeholder='Top Text'></input>
                <input for='meme' name='bottom' placeholder='Bottom Text'></input>
                <button>Create Meme</button>
            </form>
        )
    }
}

export default TextInputs