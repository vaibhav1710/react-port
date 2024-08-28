import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Timeline from './Component/Timeline/Timeline';
import Footer from './Component/Footer/Footer';
import Project from './Component/Project';
import ButtonSection from './Component/ButtonSection/ButtonSection';
import Header from './Component/Header/Header';
import HorizontalRule from './Component/HorizontalRule';
import Skills from './Component/Skills';


const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  
  return (
  <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300`}>
  <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
  <Header isDarkMode={isDarkMode}/>
  <ButtonSection isDarkMode={isDarkMode} />
  <HorizontalRule isDarkMode={isDarkMode} />
  <Skills isDarkMode={isDarkMode}/>
  <HorizontalRule isDarkMode={isDarkMode} />
  <Project isDarkMode={isDarkMode}/>
  <HorizontalRule isDarkMode={isDarkMode} />
  <Timeline isDarkMode={isDarkMode} />
  <Footer/>
  </div> 
  );
}

export default App;
 