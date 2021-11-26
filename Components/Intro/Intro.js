import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import profilePic from '../../public/img/IMG_20211118_150540.jpg';
import Toggle from '../Toggle/Toggle';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
    AiOutlineArrowDown
} from 'react-icons/ai';
import { useSpring, useTransition, animated, config } from 'react-spring';


const style = {
    paddingRight: "6px",
    fontSize: "30px"
};

// const myName = ["R", "a", "p", "h", "a", "e", "l", "", "D", "o", "n", "a", "n", "u"];
const myName = "Raphael Donanu"
const Intro = ({ toggleTheme, theme, componentMounted }) => {
    const [items, setItems] = useState(myName)

    const transitions = useTransition(items, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        config: config.molasses,
        onRest: () => setItems([]),
    })

    useEffect(() => {
        if (items.length === 0) {
            setTimeout(() => {
                setItems(myName)
            }, 2000)
        }
    }, [items])

    const anime = useSpring({ to: { rotateZ: 0 }, from: { rotateZ: 360 }, loop: false, delay: 2000 })
    // const s = useSpring({
    //     loop: { reverse: true },
    //     to: { x: 20 },
    //     from: { x: 1 },
    //   })

    if (!componentMounted) {
        return <div />
    };

    return (
        <section className={styles.container} id="index">
            <div className={styles.toggleHolder}>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div className={styles.intro}>
                <div className={styles.imageholder}>
                    {/* <animated.div style={anime}> */}
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                            width={350}
                            height={350}
                            className={styles.image}
                        />
                    {/* </animated.div> */}
                </div>

                <div className={styles.text}>

                    <h1>Hello, I'm <span>Raphael Donanu
                    {/* {transitions(
                        (styles, item) => item && <animated.span style={styles}>Raphael Donanu</animated.span>
                    )} */}
                    </span><br />I am a front-end engineer, <br /> based in Lagos, Nigeria </h1>

                </div>


            </div>
            <div className={styles.social}>
                <a href="https://linkedin.com/in/raphael-donanu" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={style} /></a>
                <a href="https://github.com/Raphael2k6" target="_blank" rel="noopener noreferrer"><AiFillGithub style={style} /></a>
                <a href="https://www.facebook.com/raphael.donanu" target="_blank" rel="noopener noreferrer"><AiFillFacebook style={style} /></a>
                <a href="https://www.instagram.com/tonubarii/?hl=en" target="_blank" rel="noopener noreferrer"> <AiFillInstagram style={style} /></a>
            </div>
            <div className={styles.more}>
                <a href="#about">
                    <button>More <AiOutlineArrowDown /></button>
                </a>
            </div>
        </section>
    )
}

export default Intro;
