import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    min-height: 100vh;
    height: auto;
    max-height: 10000vh;
    overflow: auto;
  }
  a, button {
    font-family: 'Ubuntu', sans-serif;
  }
`;
