import React from 'react'
import './VideoBackground.scss'

function VideoBackground(props) {
    return (
        <video className="landing-video" muted preload="auto" autoPlay playsInline loop style={{height: `${props.height}vh`}}>
            <source src={props.source} type="video/mp4"></source>
        </video>
    )
}

export default VideoBackground
