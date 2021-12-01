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
    height: 100vh;
    margin: 0% 15%;
    ${'' /* display: flex;
    flex-direction: column;
    justify-content: center; */}
    ${'' /* height: 100vh; */}
    
    padding: 0;
    transition: all 0.5s linear;
    @media screen and (max-width: 1439px) {
      ${'' /* margin: 0 5%; */}
    }
    @media screen and (min-width: 1440px) {
      ${'' /* margin: 0 15%; */}
    }
  }`