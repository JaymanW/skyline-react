import React, { useState, useEffect } from 'react'
import './Nav.scss'


import Hamburger from 'hamburger-react'


function Nav(props) {
    return (
        <div id="Nav" style={{background: props.newNavStyle === false ? 'none' : '#fff', transition: 'all 0.4s ease-in-out', boxShadow: props.newNavStyle === false ? 'none' : props.isOpen === true ? 'none' : '0 8px 6px -6px #999' }}>
            <div className="Nav-wrapper">
                <div className="logo">
                <svg width="50" height="33.5" viewBox="0 0 100 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{transition: 'all 0.4s ease-in-out'}} d="M11.8532 23.8963C18.4178 20.1062 15.3299 14.4148 22.9515 10.0144C27.0701 7.63654 32.0087 7.31535 34.4364 7.75712L31.2603 2.25602L35.1679 0L61.9984 46.4718L58.0909 48.7279L47.9478 31.1596C44.7189 30.9093 40.2483 31.2649 36.4501 33.4578C29.2524 37.6134 31.3211 43.5292 24.9069 47.2325C20.761 49.6261 16.3677 48.6539 16.3677 48.6539L2.92118 25.3638C2.92118 25.3638 7.68577 26.3023 11.8532 23.8963ZM14.2652 35.9882C20.9741 36.7027 23.7107 29.6571 25.3167 26.4785L29.4185 33.5829L29.4137 33.5882C30.5808 32.1941 32.0944 30.809 34.2143 29.5851C38.0808 27.3528 42.2218 26.715 45.3296 26.6247L41.0926 19.286C34.4725 18.0169 27.7626 21.217 25.3167 26.4785L21.0652 19.1147C20.023 21.6682 18.5983 25.1655 14.089 27.7689C12.864 28.4762 11.6191 28.9729 10.4128 29.3156L14.2652 35.9882Z" fill={props.newNavStyle === true ? '#000' : props.windowWidth >= 768 ? '#fff' : props.isOpen ? '#000' : '#fff'}/>
                    <path style={{transition: 'all 0.4s ease-in-out'}} d="M88.1888 24.5799C81.6241 20.7898 84.682 15.1504 77.0604 10.75C72.9418 8.3722 68.0134 8.03338 65.5931 8.46232L68.7397 3.01229L64.8322 0.756271L38.2507 46.7967L42.1583 49.0527L52.2071 31.6475C55.4275 31.4119 59.8892 31.7831 63.6874 33.976C70.8851 38.1315 68.8449 43.9979 75.2592 47.7011C79.4051 50.0948 83.7842 49.147 83.7842 49.147L97.106 26.0731C97.106 26.0731 92.3562 26.9859 88.1888 24.5799ZM85.8309 36.5779C79.1405 37.2605 76.382 30.2529 74.7669 27.09L70.7032 34.1285L70.708 34.1338C69.538 32.7446 68.0223 31.3631 65.9025 30.1393C62.036 27.9069 57.902 27.2569 54.8011 27.1547L58.9987 19.8842C65.5983 18.6505 72.3055 21.8553 74.7669 27.09L78.9789 19.7946C80.0289 22.3345 81.4644 25.8131 85.9737 28.4166C87.1987 29.1238 88.4428 29.6221 89.6476 29.9673L85.8309 36.5779Z" fill={props.newNavStyle === true ? '#000' : props.windowWidth >= 768 ? '#fff' : props.isOpen ? '#000' : '#fff'}/>
                </svg>
                    <a href="#">
                        <p style={{color: props.newNavStyle === true ? '#000' : props.windowWidth >= 768 ? '#fff' : props.isOpen ? '#000' : '#fff', transition: 'all 0.4s ease-in-out'}}>Skyline Raceway</p>
                    </a>
                </div>
                {
                    props.windowWidth >= 768 ?
                    <nav>
                        <ul className="nav-menu">
                            <li>
                                <a style={{color: props.newNavStyle === true ? '#000' : '#fff', transition: 'all 0.4s ease-in-out'}} href="#About">ABOUT US</a>
                            </li>
                            <li>
                                <a style={{color: props.newNavStyle === true ? '#000' : '#fff', transition: 'all 0.4s ease-in-out'}} href="#Activities">ACTIVITIES</a>
                            </li>
                            <li>
                                <a style={{color: props.newNavStyle === true ? '#000' : '#fff', transition: 'all 0.4s ease-in-out'}} href="#Visit">PRICING</a>
                            </li>
                            <li>
                                <a style={{color: props.newNavStyle === true ? '#000' : '#fff', transition: 'all 0.4s ease-in-out', border: props.newNavStyle === true ? '2px solid #000' : '2px solid #fff' }} href="#Contact" className="contact-btn">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                    :
                    <Hamburger 
                        size="30"
                        color={props.newNavStyle === true ? '#000' : props.isOpen ? '#000' : '#fff'}
                        onToggle={() => props.onBurger()}
                        toggled={props.isOpen}
                    />
                }
            </div>
        </div>
    )
}

export default Nav
