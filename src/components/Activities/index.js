import React from 'react'
import './Activities.scss'

function Activities() {
    return (
        <div id="Activities">
            <div className="Activities-wrapper">
                <h2>Activities</h2>
                <hr />
                <div className="Activities-cnt">
                    <img src="./gokart.png" />
                    <div className="text-cnt">
                        <h3>Go-Karting</h3>
                        <p>Skyline Raceway offers the best in go-karting in southeast Minnesota. 9 hp engine J&J karts on our quarter-mile asphalt track will give you the ultimate driving experience. Double karts are available for adults taking children under 54 inches. Come experience the twists and turns of our beautiful course and race your friends to the finish!</p>
                        <a href="#">PRICING</a>
                    </div>
                </div>
                <div className="Activities-cnt">
                    <img src="./miniGolf.png" />
                    <div className="text-cnt">
                        <h3>Mini Golf</h3>
                        <p>Skyline brings you more great fun with mini-golf! Take on our nine-hole course with a great variety of shots. Mini-golf is fun for all ages and will have everyone in the family having a great time!</p>
                        <a href="#">PRICING</a>
                    </div>
                </div>
                <div className="Activities-cnt">
                    <img src="./panning.png" />
                    <div className="text-cnt">
                        <h3>Gemstone & Fossil Panning</h3>
                        <p>We are pleased to bring you the fun of panning! Experience the thrill of finding gemstones, fossils, or arrowheads. It's fun for all ages.</p>
                        <a href="#">PRICING</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities
