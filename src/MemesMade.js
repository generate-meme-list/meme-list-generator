import React, {Component} from 'react'
import Meme from './Meme'

class MemesMade extends React.Component {
    constructor() {
        super()
        
    }

    render() {
        const madeMeme = this.props.props.map(each => 
            <Meme 
                editMeme={this.props.editMeme} 
                deleteMeme={this.props.deleteMeme} 
                onSubmit={this.props.onSubmit} 
                onChange={this.props.onChange} 
                key={each.id} 
                props={each} />)
        return (
            <div>
                <h1>Created Memes</h1>
                {madeMeme}
            </div>
        )
    }   
}

export default MemesMade