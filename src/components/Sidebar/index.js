import React from 'react'
import { SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
import './Sidebar.scss'

function Sidebar(props) {
    return (
        <SidebarContainer isOpen={props.isOpen} style={{display: props.windowWidth >= 768 ? 'none' : 'block'}}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink href="#About" onClick={props.onBurger} >ABOUT US</SidebarLink>
                    <SidebarLink href="#Activities" onClick={props.onBurger} >ACTIVITIES</SidebarLink>
                    <SidebarLink href="#Visit" onClick={props.onBurger} >PRICING</SidebarLink>
                    <SidebarLink href="#Contact" onClick={props.onBurger} className="contact-btn" style={{color: '#fff'}}>CONTACT US</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
