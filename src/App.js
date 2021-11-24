import axios from 'axios'
import React, {Component} from 'react'
import './styles.css'
import MemeImage from './MemeImage'

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
            memeObjects: []
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        axios.get('https://api.imgflip.com/get_memes')
            .then((response => {
                this.setState({
                    loading: false,
                    // array of meme objects
                        // each object has id, name, and url property
                    memeObjects: response.data.data.memes
                })
            }))
        
    }

    render() {
        const images = this.state.loading ? '' : <MemeImage props={this.state.memeObjects} />

        return (
            <div>
                {images}
            </div>
        )
    }
}

export default App