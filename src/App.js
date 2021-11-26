import axios from 'axios'
import React, {Component} from 'react'
import './styles.css'
import MemeImage from './MemeImage'
import MemesMade from './MemesMade'
import TextInputs from './TextInputs'

// main app
    // loads a meme image from list of memes images
    // http call to store in state
    // button to refresh a new meme image
// components
    // form component
        // two inputs, top and bottom text and a submit button
    // component that displays preview of the image and text for meme
    // button to save meme to a list, then clear inputs and refresh new image
        // display created memes below form and input
    // delete and edit buttons for created memes


class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            memeObjects: [],
            currentMeme: {},
            memesMade: [
                {
                    imgUrl: 'https://i.imgflip.com/30b1gx.jpg',
                    topText: 'this is the top text',
                    bottomText: 'and the bottom text is here',
                    id: '181913649'
                },
                {
                    imgUrl: 'https://i.imgflip.com/1g8my4.jpg',
                    topText: 'one option',
                    bottomText: 'the other option',
                    id: '87743020'
                }
            ],
        }

        this.randomMeme = this.randomMeme.bind(this)
        this.newMeme = this.newMeme.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        axios.get('https://api.imgflip.com/get_memes')
            .then((response => {
                this.setState({
                    loading: false,
                    // array of meme objects
                        // each object has id, name, and url property
                    memeObjects: response.data.data.memes,
                    currentMeme: response.data.data.memes[Math.floor(Math.random() * (response.data.data.memes.length - 0 + 1) + 0)]
                })
            }))
        
    }

    newMeme(event) {
        event.preventDefault()
        const newMeme = {
            imgUrl: this.state.currentMeme.url,
            topText: document.meme.top.value,
            bottomText: document.meme.bottom.value,
            id: this.state.currentMeme.id
        }
        // clear inputs
        document.meme.top.value = ''
        document.meme.bottom.value = ''
        // set state with new memeObject
        this.setState(prevState => ({memesMade: [...prevState.memesMade, newMeme]}))
        // get a new image
        this.randomMeme(event)

    }

    randomMeme(event) {
        event.preventDefault()
        this.setState({currentMeme: this.state.memeObjects[Math.floor(Math.random() * (this.state.memeObjects.length - 0 + 1) + 0)]})
    }

    render() {
        const randomImage = this.state.loading ? '' : <MemeImage props={this.state} />

        return (
            <div id='meme-container'>
                <h1>Create a Meme</h1>
                <button onClick={this.randomMeme}>Refresh Meme Image</button>
                {randomImage}
                <TextInputs onSubmit={this.newMeme} />
                <MemesMade props={this.state.memesMade} />
            </div>
        )
    }
}

export default App 