import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Components/Utils/theme';
import { GlobalStyles } from '../Components/Utils/globals';
import Toggle from '../Components/Toggle/Toggle';
import { useDarkMode } from '../Components/Utils/UseDarkMode';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/img/IMG_20211118_150540.jpg'
import NavBar from '../Components/NavBar/NavBar';
import Head from 'next/head'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiOutlineArrowDown } from 'react-icons/ai';

const data = [
  {id: 1, tool: "HTML"},
  {id: 2, tool: "CSS"},
  {id: 3, tool: "SASS"},
  {id: 4, tool: "Javascript"},
  {id: 5, tool: "Typescript"},
  {id: 6, tool: "React"},
  {id: 7, tool: "Next.js"},
  {id: 8, tool: "Jquery"},
  {id: 9, tool: "Node"},
  {id: 5, tool: "Go"},
  {id: 10, tool: "PostgreSQL"},
  {id: 11, tool: "Docker"},
  {id: 12, tool: "Git"},
  // {id: 13, tool: "HTML"},
  // {id: 14, tool: "HTML"},
  // {id: 15, tool: "HTML"},
]

const style = {
  paddingRight: "6px",
  fontSize: "30px"
};

const tools = data.map((datum, id) => {
  return (
      <span key={id}>{datum.tool}</span>
  )
})
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
        <Head>
          <title>Raphael Donanu</title>
          <link rel="icon" href="../public/img/favicon.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Raphael Donanu, a front-end engineer skilled in HTML, CSS, Javascript, React and Node.js with experience working on databases" />
          <meta name="author" content="Raphael Donanu" />
          <meta name="keywords" content="web design, front-end web development, software engineer, Javascript engineer, React, Redux, Next.js" />
        </Head>
        <section className={styles.container} id="index">
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
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
          <div className={styles.social}>
            <a href="https://linkedin.com/in/raphael-donanu" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={style}/></a>
            <a href="https://github.com/Raphael2k6" target="_blank" rel="noopener noreferrer"><AiFillGithub style={style}/></a>
            <a href="https://www.facebook.com/raphael.donanu" target="_blank" rel="noopener noreferrer"><AiFillFacebook style={style}/></a>
            <a href="https://www.instagram.com/raphaeldonanu/?hl=en" target="_blank" rel="noopener noreferrer"> <AiFillInstagram style={style}/></a>
          </div>
          <div className={styles.more}>
            <a href="#about">
              <button>More <AiOutlineArrowDown /></button>
            </a>
          </div>
          {/* <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1> */}
        </section>
        <NavBar />
        <section className={styles.about} id="about">
          <div className={styles.glass}>
            <h1>About me</h1>
            <div className={styles.aboutDetails}>
              <div>            
                <p>I am a frontend engineer based in Lagos, Nigeria with experience having worked in various teams of engineers employing diverse tools, 
                modern frontend technologies, and best practices to build performant and accessible web interphases on 
                complex applications that provide e-commerce and payment solutions.</p>
              </div>
              <div className={styles.techStack}>
                <h3>Tools and Technologies</h3>
                <div className={styles.tools}>{tools}</div>
                <div className={styles.cv}>
                  <a href="https://drive.google.com/file/d/12n3jmityqn8S_NpkT-5gruxqWKsolMJH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <button>Download CV</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
        </footer>
      </>

    </ThemeProvider>
  )
}
