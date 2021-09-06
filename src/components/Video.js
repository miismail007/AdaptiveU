import React from 'react'

function Video(props) {
    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={props.video.img} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{props.video.title}</h4>
                    <a href="#" className="btn btn-primary">Add to wishlist</a>
                </div>
            </div>
        </div>
    )
}

export default Video
