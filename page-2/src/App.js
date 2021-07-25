import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { GlobalStyle } from "components/styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>App</p>
    </ThemeProvider>
  );
};

export default App;
