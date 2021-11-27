import React, {Component} from 'react'
import Meme from './Meme'

class MemesMade extends React.Component {
    constructor() {
        super()
        
    }

    render() {
        const madeMeme = this.props.props.map(each => <Meme key={each.id} props={each} />)
        return (
            <div>
                <h1>list of memes</h1>
                {madeMeme}
            </div>
        )
    }
}

export default MemesMade