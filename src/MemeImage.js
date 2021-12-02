import React, {Component} from 'react'

class MemeImage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='memeImage'>
                <h1 className='topText'>{this.props.props.topText}</h1>
                <img id='meme-image' style={{height: '500px'}} alt={this.props.props.currentMeme.id} src={this.props.props.currentMeme.url}></img>
                <h1 className='bottomText'>{this.props.props.bottomText}</h1>
            </div>
        )
    }
}

export default MemeImage