import React, {Component} from 'react'
import './styles.css'

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
            test: 'helloWorld'
        }
    }

    render() {
        return (
            <h1>{this.state.test}</h1>
        )
    }
}

export default App