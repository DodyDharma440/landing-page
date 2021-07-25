import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { GlobalStyle } from "components/styled";
import { HomePage } from "pages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
