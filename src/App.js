import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Videos from './components/Videos'

function App() {
    const [ brand , setbrand ] = useState("AdaptiveU");
    const [ videos , setVideos ] = useState([])

    const setDataToVideoState = (title,image) => {
        const data = {
            title : title,
            img : image
        }
        setVideos([...videos , data])
    }
    return (
        <div>
            <Header brand = {brand}/>
            <Form setDataToVideoState={setDataToVideoState}/>
            <Videos videos = {videos}/>
        </div>
    )
}

export default App
