import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <nav className={styles.navContainer}>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
              <ul className={styles.navLinks}>
                <li><a href="#index">Home</a></li>  
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a className="contactz" href="#contact"><button>Contact</button></a></li>
              </ul>
            </nav>
          </div>
    )
}

export default NavBar
