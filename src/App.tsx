import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'routes';
import { GlobalStyle, theme } from 'lib/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
