import axios from 'axios'
import React, {Component} from 'react'
import ReactDOM, { render } from 'react-dom'
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
            topText: '',
            bottomText: '',
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
            ]
        }

        // this.handleEditChange = this.handleEditChange.bind(this)
        // this.editMeme = this.editMeme.bind(this)
        this.deleteMeme = this.deleteMeme.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    deleteMeme(event) {
        event.preventDefault()
        // get the id for the meme
        const memeId = event.target.parentElement.id
        // find the index and splice out the one object from the array
        // return the rest of the meme array
        this.setState((prevState) => {
            const index = prevState.memesMade.findIndex(index => index.id === memeId)
            const memes = prevState.memesMade
            console.log(memes[index])
            memes.splice(index, 1)
            return {memesMade: memes}
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleUpdate(event) {
        event.preventDefault()
        const idToUpdate = event.target.parentElement.parentElement.id
        const {topText, bottomText} = event.target
        let newTop = topText.value
        let newBottom = bottomText.value
        if (newTop === '') {
            newTop = topText.placeholder
        }
        if (newBottom === '') {
            newBottom = bottomText.placeholder
        }
        console.dir(newTop)
        console.log(newBottom)
        // update state and return the change in the array of memes
        this.setState((prevState) => {
            const index = prevState.memesMade.findIndex(index => index.id === idToUpdate)
            prevState.memesMade[index].topText = newTop
            prevState.memesMade[index].bottomText = newBottom
            console.log(prevState.memesMade[index])
            return {
                memesMade: prevState.memesMade
            }
        })
        // remove form and add an edit button
        // const editButton = document.createElement('button')
        // editButton.textContent = 'Edit'
        // editButton.onclick = 'editMeme'
        // console.log(editButton)
        // // event.target.parentElement.replaceChild(editButton, event.target)
        // console.dir(editButton)
        // ReactDOM.unmountComponentAtNode(document.getElementById(idToUpdate))
        
    }

    // might need to move edit meme function to parent element.

    // handleEditChange(event) {
    //     event.preventDefault()
    //     const memeId = event.target.parentElement.parentElement.parentElement.id
    //     const index = this.state.memesMade.findIndex(index => index.id === memeId)
    //     const meme = this.state.memesMade[index]

    //     this.setState(prevState => {
            

    //         return {
    //             memesMade: updatedMemes
    //         }
    //     })

    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // editMeme(event) {
    //     event.preventDefault() 
    //     const memeId = event.target.parentElement.id
    //     const index = this.state.memesMade.findIndex(index => index.id === memeId)
    //     const meme = this.state.memesMade[index]
    //     console.log(meme)
    //     const newForm = 
    //         <form onSubmit={this.props.onSubmit}>
    //             <input onChange={this.handleEditChange} htmlFor='updateMeme' placeholder={meme.topText} name='topText'></input>
    //             <input onChange={this.handleEditChange} htmlFor='updateMeme' placeholder={meme.bottomText} name='bottomText'></input>
    //             <button>Update Meme</button>
    //         </form>

    //     const formWrap = document.createElement('div')
    //     formWrap.id = `edit-${memeId}`
        
    //     event.target.parentElement.replaceChild(formWrap, event.target)
    //     render(newForm, document.getElementById(`edit-${memeId}`))
    // }

    newMeme(event) {
        event.preventDefault()
        const newMeme = {
            imgUrl: this.state.currentMeme.url,
            topText: this.state.topText,
            bottomText: this.state.bottomText,
            id: this.state.currentMeme.id
        }
        // clear inputs
        document.meme.bottomText.value = ''
        document.meme.topText.value = ''
        // clear state for inputs
        this.setState({
            topText: '',
            bottomText: ''
        })
        document.meme.topText.value = ''
        document.meme.bottomText.value = ''
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
                <TextInputs onChange={this.handleChange} onSubmit={this.newMeme} topText={this.state.topText} bottomText={this.state.bottomText}/>
                <MemesMade editMeme={this.editMeme} deleteMeme={this.deleteMeme} onSubmit={this.handleUpdate} onChange={this.handleChange} props={this.state.memesMade} />
            </div>
        )
    }
}

export default App 