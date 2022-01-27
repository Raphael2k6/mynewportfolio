import React, {useEffect, useRef} from 'react';
import styles from '../../styles/Home.module.css'
import { data } from '../../data';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const tools = data.map((datum, id) => {
    return (
        <span key={id}>{datum.tool}</span>
    )
});

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const circleRef = useRef(null);
    
  useEffect(() => {
    gsap.to("#text", {
    x: 5,
    opacity: 0.9,
    duration: 2,
    scrollTrigger: {
        trigger: "#text",
        toggleActions: "play complete reverse reset",
    }
    })

    gsap.to("#tools", {
        x: -5,
        opacity: 0.9,
        duration: 2,
        scrollTrigger: {
            trigger: "#tools",
            toggleActions: "play complete reverse reset",
        }
    })
    }, []);


    return (
        <div>
            <section className={styles.about} id="about">
                <div className={styles.glass}>
                    <h1>About me</h1>
                    <div className={styles.aboutDetails}>
                        <div className={styles.aboutText} ref={circleRef} id="text">
                            <p>I am a frontend engineer based in Lagos, Nigeria with experience working in various teams of engineers 
                                employing diverse tools, modern frontend technologies, and best practices to build performant and accessible web interfaces on complex applications that provide e-commerce and payment solutions.
                                <br />
                                <br />
                                I am passionate about building fast, and scalable applications with beautiful designs that will leave users satisfied.
                                I code for fun, I love learning new things and taking up new challenges. When I am not coding, I am listening to music and reading something new.
                            </p>
                        </div>
                        <div className={styles.techStack}>
                            <h3>Tools and Technologies</h3>
                            <div className={styles.tools} id="tools">{tools}</div>
                            <div className={styles.cv}>
                                <a href="https://drive.google.com/file/d/1AK0oLmpPowkNGQv78eeKbE8LcSC-FnSf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <button>Download CV</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
