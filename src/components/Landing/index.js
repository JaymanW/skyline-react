import React from 'react'
import './Landing.scss'

import VideoBackground from '../VideoBackground'

function Landing() {
    return (
        <div id="Landing">
            <VideoBackground source="./smallerdarker.mp4" height="90" />
            <div className="Landing-wrapper">
                <h1>Skyline Raceway</h1>
                <p>Let the fun begin.</p>
                <div className="landing-btn-cnt">
                    <a href="#About" >
                        ABOUT US
                    </a>
                    <a href="#Visit" >
                        PLAN YOUR VISIT
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing
