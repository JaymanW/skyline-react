import React from 'react'
import './Location.scss'

function Location() {
    
    
    return (
        <div id="Location">
            <div className="Location-wrapper">
                <div className="Location-text">
                    <h2>Location/Directions</h2>
                    <div className="address-cnt">
                        <img src='./location.png' />
                        <p>2248 40th Street Southwest Rochester, MN 55902</p>
                    </div>
                    <p>We are located at 2248 40th St. SW, Rochester, MN. From Rochester, go south on Broadway (Hwy 63), take the 40th St Exit, turn right on 40th St. SW, go about 1.5 miles and look for the Skyline Raceway sign on the left side.</p>
                </div>
                <iframe width="425" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=2250+40th+St+SW,+Rochester,+MN+55902&amp;aq=&amp;sll=43.963909,-92.490807&amp;sspn=0.140114,0.338173&amp;ie=UTF8&amp;hq=&amp;hnear=2250+40th+St+SW,+Rochester,+Olmsted,+Minnesota+55902&amp;t=m&amp;ll=43.962673,-92.497931&amp;spn=0.018534,0.036478&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
            </div>
        </div>
    )
}

export default Location
