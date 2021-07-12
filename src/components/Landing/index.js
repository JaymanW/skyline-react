import React from 'react'
import './Landing.scss'

import VideoBackground from '../VideoBackground'

function Landing() {
    return (
        <div id="Landing">
            <VideoBackground source="./smaller.mp4" height="90" />
            <div className="Landing-wrapper">
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Landing
