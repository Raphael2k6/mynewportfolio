import React, { useState } from 'react'
import { projectData } from '../../data';
import Image from 'next/image';
import styles from './Projects.module.css';
import { composeClasses } from '../Utils/Utils';

const Projects = () => {
    const [showImage, setShowImage] = useState(false);
    const [currentBox, setCurrentBox] = useState(-1);

    const handleShowImage = (visibility, index) => {
        setShowImage(visibility);
        handleSetCurrentBox(index);
    }

    const handleSetCurrentBox = (currentIndex) => {
        setCurrentBox(currentIndex)
    }

    const projects = projectData.map((project, i) => {
        return (
            <div key={i} className={composeClasses(styles.projects)} onMouseEnter={() => handleShowImage(true, i)} onMouseLeave={() => handleShowImage(false)}>
                <span>
                    {currentBox !== i && <p className={styles.hoverText} >{project.name}</p>}
                    {showImage && (currentBox === i) && <Image
                        className={styles.img}
                        height={200}
                        width={400}
                        src={project.image}
                    />}
                </span>
            </div>
        )
    })
    return (
        <section className={styles.projectContainer} id="projects">

            <div className={styles.glass}>
                <h1>Projects</h1>
                <div className={styles.projectCard}>{projects}</div>
            </div>
        </section>
    )
}

export default Projects
