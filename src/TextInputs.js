import React, {Component} from 'react'

class TextInputs extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return (
            <form name='meme' onSubmit={this.props.onSubmit} >
                <input 
                    htmlFor='meme' 
                    name='topText' 
                    placeholder='Top Text' 
                    onChange={this.props.onChange}
                ></input>
                <input 
                    htmlFor='meme' 
                    name='bottomText' 
                    placeholder='Bottom Text' 
                    onChange={this.props.onChange}
                ></input>
                <button>Create Meme</button>
            </form>
        )
    }
}

export default TextInputs