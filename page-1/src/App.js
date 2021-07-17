import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyle } from "styles";
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
