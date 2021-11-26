import React, {Component} from 'react'

class MemeImage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <img id='meme-image' style={{height: '500px'}} alt={this.props.props.currentMeme.id} src={this.props.props.currentMeme.url}></img>
        )
    }
}

export default MemeImage