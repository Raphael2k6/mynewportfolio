import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Components/Utils/theme';
import { GlobalStyles } from '../Components/Utils/globals';
import Toggle from '../Components/Toggle/Toggle';
import { useDarkMode } from '../Components/Utils/UseDarkMode';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/img/IMG_20211118_150540.jpg'

export default function Home() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <section className={styles.container}>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
            <h5>Raphael Donanu</h5>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className={styles.intro}>
            <div className={styles.imageholder}>
              <Image
                src={profilePic}
                alt="Picture of the author"
                width={350} automatically provided
                height={350} automatically provided
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h1>Hello, I'm <span>Raphael Donanu.</span> <br />I am a front-end engineer, <br /> based in Lagos, Nigeria </h1>
            </div>
          </div>
          {/* <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1> */}
        </section>
        <section>

        </section>
        <footer>
        </footer>

      </>

    </ThemeProvider>
  )
}
