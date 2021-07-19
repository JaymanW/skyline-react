import React from 'react'
import './Contact.scss'

function Contact() {
    return (
        <div id="Contact">
            <div className="Contact-wrapper">
                <h2>Questions or Comments?</h2>
                <p>Reach out to us and we’ll be happy to help!</p>
                <div className="Contact-cnt">
                    <img src='./phone.png' alt="phone icon" />
                    <p>(507) 287-6289</p>
                </div>
                <div className="Contact-cnt">
                    <img src='./email.png' alt="email icon" />
                    <p>elbishop44@icloud.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
