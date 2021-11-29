import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Components/Utils/theme';
import { GlobalStyles } from '../Components/Utils/globals';
import { useDarkMode } from '../Components/Utils/UseDarkMode';
import NavBar from '../Components/NavBar/NavBar';
import SideBar from '../Components/SideBar/SideBar';
import Header from '../Components/Header/Header'
import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const toggleSidebar = () => {
    console.log("I am here");
    setIsOpen(!isOpen);
  }
  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header />
        <Intro
          toggleTheme={toggleTheme} 
          componentMounted={componentMounted} 
          theme={theme}
        />
        <SideBar toggleSidebar={toggleSidebar} isOpen={isOpen} /> 
        <NavBar toggleSidebar={toggleSidebar}/>
        <About />
        <Projects />
        <footer>
        </footer>
      </>

    </ThemeProvider>
  )
}
