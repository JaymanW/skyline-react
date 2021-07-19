import React from 'react'
import './Activities.scss'

function Activities() {
    return (
        <div id="Activities">
            <div className="Activities-wrapper">
                <h2>Activities</h2>
                <hr />
                <div className="Activities-cnt">
                    <img src="./gokart.jpg" alt="photo of man go-karting"/>
                    <div className="text-cnt">
                        <h3>Go-Karting</h3>
                        <p>Skyline Raceway offers the best in go-karting in southeast Minnesota. 6 1/2 hp engine J&J karts on our quarter-mile asphalt track will give you the ultimate driving experience. Double karts are available for adults taking children under 54 inches. Come experience the twists and turns of our beautiful course and race your friends to the finish!</p>
                        <a href="#Visit">PRICING</a>
                    </div>
                </div>
                <div className="Activities-cnt">
                    <img src="./miniGolf.jpg" alt="photo mini golf course" />
                    <div className="text-cnt">
                        <h3>Mini Golf</h3>
                        <p>Skyline brings you more great fun with mini-golf! Take on our nine-hole course with a great variety of shots. Mini-golf is fun for all ages and will have everyone in the family having a great time! We offer free mini-golf for Veterans, Police, and Fire Department personnel.</p>
                        <a href="#Visit">PRICING</a>
                    </div>
                </div>
                <div className="Activities-cnt">
                    <img src="./panning.jpg" alt="photo of fossil panning station" />
                    <div className="text-cnt">
                        <h3>Gemstone & Fossil Panning</h3>
                        <p>We are pleased to bring you the fun of panning! Experience the thrill of finding gemstones, fossils, or arrowheads. It's fun for all ages.</p>
                        <a href="#Visit">PRICING</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities
