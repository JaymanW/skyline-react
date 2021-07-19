import React from 'react'
import './Visit.scss'

function Visit() {
    return (
        <div id="Visit">
            <h2>Plan your visit!</h2>
            <div className="Visit-wrapper">
                <div className="visit-column">
                    <div className="text-cnt">
                        <h3>Hours/Availability</h3>
                        <p>We are open May 23 through Labor Day. Weekends only for the month of September.</p>
                        <p><span className='bold'>Monday - Saturday:</span> 12:00pm-7:30pm</p>
                        <p><span className='bold'>Sunday:</span> 12:00pm-6:00pm</p>
                        <hr className="divider-a" />
                    </div>

                    <div className="text-cnt">
                        <h3>Pricing</h3>
                        <div className="list">
                            <h4>Go Karting:</h4>
                            <ul>
                                <li>
                                    <p>$8.00* per 5 minute ride</p>
                                </li>
                                <li>
                                    <p>$10.00* per 5 minute ride for double kart (for adults with children smaller than 54")</p>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <h4>Mini Golf:</h4>
                            <ul>
                                <li>
                                    <p>$7.00* per 9-hole round</p>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <h4>Gemstone & Fossil Panning:</h4>
                            <ul>
                                <li>
                                    <p>$9.00* per bag</p>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <h4>Groups & Private Parties:</h4>
                            <ul>
                                <li>
                                    <p>$5,200.00* All Day Reservation</p>
                                </li>
                                <li>
                                    <p>$3,000.00* Half Day Reservation (12:00pm-3:30pm or 4:00pm-7:30pm)</p>
                                </li>
                            </ul>
                        </div>
                        <p>*tax included</p>
                        <hr className="divider-b" />
                    </div>
                </div>

                <div className="visit-column">
                    <div className="text-cnt">
                        <h3>Please Note</h3>
                        <p>No pets allowed.</p>
                        <p>In order to keep ticket prices low, we only accept <span className="bold">CASH</span> and <span className="bold">CREDIT CARDS</span> as forms of payment. Debit cards & checks will not be accepted</p>
                        <p>Children must be 54” or taller to drive a go-kart. If they are smaller than 54”, they may ride along in a double kart with an adult.</p>
                        <p>Our facility is <span className="bold">dependent on good weather</span>. Please check the weather or <a href="#Contact">contact us</a> to see what the weather is currently doing in our area.</p>
                        <hr className="divider-a" />
                    </div>

                    <div className="text-cnt">
                        <h3>Specials</h3>
                        <div className="text-box">
                            <h4>Go-Kart Specials:</h4>
                            <p><span className="bold">Tuesday & Thursday -</span> 6pm to 7:30pm $2.00 off per ride</p>
                        </div>

                        <div className="text-box">
                            <h4>Mini Golf Specials</h4>
                            <p><span className="bold">Monday & Wednesday -</span> 6pm to 7:30pm $2.00 off per 9-holes</p>
                        </div>

                        <div className="text-box">
                            <h4>Family Pack</h4>
                            <p>4 single go-kart tickets and 4 games of mini-golf for $55.00 (tax included).</p>
                        </div>

                        <div className="text-box">
                            <h4>Party Pack</h4>
                            <p>10 single go-kart tickets and 5 games of mini-golf for $98.00 (tax included).</p>
                        </div>

                        <div className="text-box">
                            <h4>Race Pack</h4>
                            <p>22 single go-kart tickets for $160.00 (tax included).</p>
                        </div>

                        <p>*No coupons or other discounts valid with any specials.</p>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Visit
