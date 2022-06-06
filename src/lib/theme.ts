import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const theme: DefaultTheme = {
  red: '#E51013',
  black: {
    veryDark: '#141414',
    darker: '#181818',
    lighter: '#2F2F2F',
  },
  white: {
    lighter: '#fff',
    darker: '#e5e5e5',
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    background-color: black;
    color:white;
  }
`;
