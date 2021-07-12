import React, { useState, useEffect } from 'react'
import './App.scss';

import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import Landing from './components/Landing'


function App() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

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
      <Nav onBurger={handleOpen} isOpen={isOpen} windowWidth={windowWidth} />
      <Landing />
    </div>
  );
}

export default App;
