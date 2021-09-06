import axios from 'axios';
import React, { useState } from 'react'

function Form(props) {
    const [ preview, setPreview ] = useState(false);
    const [url , setUrl] = useState("");
    const [image , setImage ] = useState("")
    const [title , setTitle ] = useState("")

    const fetchUrl = (url)=> { 
        const id = url.slice(url.length - 11)
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyDhrvd3YifzhdGGr3QOz3_0W2eP8HRT2SQ`).then((response)=>{
            setTitle(response.data.items[0].snippet.title);
            setImage(response.data.items[0].snippet.thumbnails.standard.url);
            setTimeout(() => {
                setPreview(true)
            }, 500);
        })
    }

    const clearData = () => {
        setUrl("")
        setPreview(false)
    }

    return (
        <div className="container m-3">
            <div className="d-flex justify-content-end">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Recommend a video
            </button>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Enter Video URL</h5>
                    <button type="button" class="close" data-dismiss="modal" onClick={()=>{
                        clearData()
                    }} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div className="form-group">
                        <label for="url">Email URL:</label>
                        <input type="text" className="form-control" value={url} placeholder="Enter URL" id="url" onChange={(text)=>{
                            setUrl(text.target.value);
                            fetchUrl(text.target.value)
                        }}/>
                    </div>
                </div>
                {preview && 
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={image} class="card-img" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                }
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>{
                        clearData()
                    }}>Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=>{
                        props.setDataToVideoState(title,image)
                        clearData()
                    }}>Recommend</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Form
