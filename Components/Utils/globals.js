import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    ${'' /* align-items: center; */}
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    ${'' /* display: flex;
    flex-direction: column;
    justify-content: center; */}
    ${'' /* height: 100vh; */}
    
    margin: 0 15%;
    padding: 0;
    transition: all 0.5s linear;
  }`