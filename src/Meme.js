import React, {Component} from 'react'

class Meme extends React.Component {
    constructor () {
        super ()

    }

    render() {
        return (
            <div className='meme' id={this.props.props.id}>
                <h1>{this.props.props.topText}</h1>
                <img src={this.props.props.imgUrl}></img>
                <h1>{this.props.props.bottomText}</h1>
            </div>
        )
    }
}

export default Meme