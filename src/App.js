import React, { useState, useEffect } from 'react'
import './App.scss';

import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import Landing from './components/Landing'
import ActivitiesTeaser from './components/ActivitiesTeaser'
import About from './components/About'
import FunBanner from './components/FunBanner';
import Activities from './components/Activities';
import Visit from './components/Visit';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowScroll, setWindowScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [newNavStyle, setNewNaveStyle] = useState(false);
  
  useEffect(() => {
    updateWindowWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
      setWindowScroll(window.pageYOffset)
      );
    }
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  useEffect(() => {
    // console.log(windowScroll)
    if (windowScroll >= 50) {
      setNewNaveStyle(true);
    } else {
      setNewNaveStyle(false);
    }
  }, [windowScroll])

  const updateWindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
  }
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} onBurger={handleOpen} windowWidth={windowWidth} />
      <Nav newNavStyle={newNavStyle} onBurger={handleOpen} isOpen={isOpen} windowWidth={windowWidth} />
      <Landing />
      <ActivitiesTeaser />
      <About />
      <FunBanner />
      <Activities />
      <Visit />
      <Location windowWidth={windowWidth} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
