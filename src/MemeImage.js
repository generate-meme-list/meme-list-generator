import React, {Component} from 'react'

class MemeImage extends React.Component {
    // gets random index for image
    constructor() {
        super()
        this.state = {
            memeObjects: []

        }

        this.randomImage = this.randomImage.bind(this)
    }
    componentDidMount() {
        this.setState({memeObjects: this.props})
    }
    
    randomImage(event) {
        event.preventDefault()
        console.log(this.state.memeObjects)
        document.getElementById('meme-image').src = this.state.memeObjects.props[Math.floor(Math.random() * (this.state.memeObjects.props.length - 0 + 1) + 0)].url
    }

    render() {
        const imageUrl = this.props.props.length === 0 ? '' : this.props.props[Math.floor(Math.random() * (this.props.props.length - 0 + 1) + 0)].url
        return (
            <div>
                <img id='meme-image' style={{height: '500px'}} alt='meme image' src={imageUrl}></img>
                <button onClick={this.randomImage}>Random Image</button>
            </div>
        )
    }
}

export default MemeImage