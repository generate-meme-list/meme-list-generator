import React, {Component} from 'react'

class TextInputs extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return (
            <form name='meme' onSubmit={this.props.onSubmit} >
                <input for='meme' name='topText' placeholder='Top Text' onChange={this.props.onChange}></input>
                <input for='meme' name='bottomText' placeholder='Bottom Text' onChange={this.props.onChange}></input>
                <button>Create Meme</button>
            </form>
        )
    }
}

export default TextInputs