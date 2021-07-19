import React from 'react'
import './About.scss'

function About() {
    return (
        <div id="About">
            <div className="About-wrapper">
                <img src="./about.jpg" alt="Photo of the main Skyline Raceway building"/>
                <div className="about-text-cnt">
                    <h2>About Us</h2>
                    <p>
                    For the last 60 years we have been the premier place for family-friendly fun in Rochester, Minnesota. From Go-karts to Mini Golf, we have activities for people of all ages and gaurentee you’ll have a blast. Check out our <a href="#Activities">activies</a> and <a href="#Visit">plan your visit</a> today.
                    </p>
                    <a href="#Visit">
                        GET STARTED
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
