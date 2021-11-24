import React from 'react'

function MemeImage(props) {
    console.log(props)
    // gets random index for image
    const imageUrl = props.props.length === 0 ? '' : props.props[Math.floor(Math.random() * (props.props.length - 0 + 1) + 0)].url

    return (
        <div>
            <img style={{height: '500px'}} alt='meme image' src={imageUrl}></img>
            <button>Random Image</button>
        </div>
    )
}

export default MemeImage