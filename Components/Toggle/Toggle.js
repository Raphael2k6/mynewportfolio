import React from 'react'
import { func, string } from 'prop-types';
// import ToggleContainer from './Toggle.styled';
import styled from 'styled-components';
import Icon from "../Utils/Icons/Icon";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
// import { ReactComponent as MoonIcon } from 'icons/moon.svg';
// import { ReactComponent as SunIcon } from 'icons/sun.svg';


const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  ${'' /* font-size: 2rem; */}
  ${'' /* justify-content: space-between; */}
  ${'' /* margin: 0 auto; */}
  overflow: hidden;
  padding: 0.2rem;
  ${'' /* position: relative; */}
  width: 3rem;
  height: 1.7rem;

  svg {
    height: auto;
    width: 3rem;
    transition: all 0s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(30px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-30px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <Icon name="moon" />
      <Icon name="sun" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;