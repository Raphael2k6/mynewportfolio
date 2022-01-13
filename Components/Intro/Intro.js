import React, { Fragment } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import classes from './Intro.module.css';
import profilePic from '../../public/img/IMG_20211118_150540.jpg';
import Toggle from '../Toggle/Toggle';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
    AiOutlineArrowDown
} from 'react-icons/ai';
import { composeClasses } from '../Utils/Utils';
import AnimatedText from '../AnimatedText/AnimatedText';


const style = {
    paddingRight: "6px",
    fontSize: "30px"
};

const Intro = ({ toggleTheme, theme, componentMounted }) => {


    if (!componentMounted) {
        return <div />
    };

    return (
        <Fragment>
            <section className={classes.containerx} id="index" style={{ margin: "0% 15%", height: "100vh" }}>
                <div className={styles.toggleHolder}>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <div className={styles.intro}>
                    <div className={composeClasses(styles.imageholder, styles.animate, styles.pop, styles.delay12)}>
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                            width={350}
                            height={350}
                            className={styles.image}
                        />
                    </div>

                    <div className={composeClasses(styles.text, styles.animate, styles.flip, styles.delay2)}>

                        <h1>Hello, I'm <AnimatedText>Raphael Donanu
                        </AnimatedText><br /> a front-end engineer <br /> based in Lagos, Nigeria </h1>
                        <div className={styles.social}>
                            <a href="https://linkedin.com/in/raphael-donanu" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={style} /></a>
                            <a href="https://github.com/Raphael2k6" target="_blank" rel="noopener noreferrer"><AiFillGithub style={style} /></a>
                            {/* <a href="https://www.facebook.com/raphael.donanu" target="_blank" rel="noopener noreferrer"><AiFillFacebook style={style} /></a> */}
                            <a href="https://www.instagram.com/tonubarii/?hl=en" target="_blank" rel="noopener noreferrer"> <AiFillInstagram style={style} /></a>
                        </div>

                    </div>


                </div>
                <div className={composeClasses(styles.more, styles.animate, styles.slide, styles.delay3)}>
                    <a href="#about">
                        <button>More <AiOutlineArrowDown /></button>
                    </a>
                </div>
            </section>
        </Fragment>
    )
}

export default Intro;
