import React from 'react';
import styles from './SideBar.module.css';
import {
    SidebarContainer,
    CloseIcon, Icon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
} from './SideBarElements';
// import ListItems from '../NavBar/ListItems';

const SideBar = ({ toggleSidebar, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={() => toggleSidebar()}>
            <Icon onClick={() => toggleSidebar()}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <ul className={styles.navLinks}>
                    <li onClick={() => toggleSidebar()}><a href="#index">Home</a></li>
                    <li onClick={() => toggleSidebar()}><a href="#about">About</a></li>
                    <li onClick={() => toggleSidebar()}><a href="#projects">Projects</a></li>
                    <li onClick={() => toggleSidebar()}><a className="contactz" href="#contact"><button>Contact</button></a></li>
                </ul>
            </SidebarWrapper>
            {/* <ListItems /> */}
        </SidebarContainer>
    )
}

export default SideBar
