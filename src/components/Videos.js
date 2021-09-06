import React from 'react'
import Video from './Video'

function Videos(props) {
    return (
        <div className="container">
            <div className="row">
                {props.videos.map((video)=> <Video video = { video }/> )}
                
            </div>
        </div>
    )
}

export default Videos
