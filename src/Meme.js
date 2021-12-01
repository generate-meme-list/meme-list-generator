import React, {Component} from 'react'
import reactDom, { render } from 'react-dom'

class Meme extends React.Component {
    constructor () {
        super ()
        this.state = {

        }

        this.editMeme = this.editMeme.bind(this)
        // this.handleChangeUpdate = this.handleChangeUpdate.bind(this)
    }

    componentDidMount() {
        this.setState(this.props.props)
    }

    // handleChangeUpdate(event) {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    editMeme(event) {
        event.preventDefault()
        const keyId = `edit-${event.target.parentElement.id}`
        const editButton = event.target
        const topText = this.props.props.topText
        const bottomText = this.props.props.bottomText
        this.setState(this.props.props)
        const newForm = 
            <form onSubmit={this.props.onSubmit}>
                <input 
                    onChange={this.props.onChange} 
                    htmlFor='updateMeme' 
                    placeholder={this.state.topText} 
                    name='topText'
                ></input>
                <input 
                    onChange={this.props.onChange} 
                    htmlFor='updateMeme' 
                    placeholder={this.state.bottomText} 
                    name='bottomText'
                ></input>
                <button>Update Meme</button>
            </form>
        // document.body.insertBefore(newDiv, currentDiv);
        const form = document.createElement('div')
        form.id = keyId
        event.target.parentElement.replaceChild(form, event.target)
        render(newForm, document.getElementById(keyId))
    }

    render() {
        return (
            <div className='meme' id={this.props.props.id}>
                <h1 className='topText'>{this.props.props.topText}</h1>
                <img src={this.state.imgUrl}></img>
                <h1 className='bottomText'>{this.props.props.bottomText}</h1>
                <button onClick={this.editMeme}>Edit</button>
                <button onClick={this.props.deleteMeme}>Delete</button>
            </div>
        )
    }
}

export default Meme