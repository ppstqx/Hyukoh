import React from 'react'
import ReactPlayer from 'react-player'
import './Video.css'

function Video() {
    return (
        <div id='video'>
            <h1>VIDEO</h1>
            <div className="video-con">
            <ReactPlayer className="video"
            width= '1000px'
            height= '600px'
            url ='https://www.youtube.com/watch?v=aKHbqm-D62Y' />
            </div>
        </div>
    )
}

export default Video
