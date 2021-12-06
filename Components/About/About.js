import React from 'react';
import styles from '../../styles/Home.module.css'
import { data } from '../../data';

const tools = data.map((datum, id) => {
    return (
        <span key={id}>{datum.tool}</span>
    )
});

const About = () => {
    return (
        <div>
            <section className={styles.about} id="about">
                <div className={styles.glass}>
                    <h1>About me</h1>
                    <div className={styles.aboutDetails}>
                        <div className={styles.aboutText}>
                            <p>I am a frontend engineer based in Lagos, Nigeria with experience working in various teams of engineers employing diverse tools,
                                modern frontend technologies, and best practices to build performant and accessible web interphases on
                                complex applications that provide e-commerce and payment solutions.
                                <br />
                                <br />
                                I am passionate about building fast, performant and scalable applications with beautiful designs that will leave users happy.
                                <br />I code for fun, I love learning new things and taking up new challenges. When I am not not coding, I am listening to music and
                                reading something new.
                            </p>
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
        </div>
    )
}

export default About
