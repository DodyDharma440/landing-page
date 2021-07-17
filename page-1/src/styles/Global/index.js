import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(p) => p.theme.fonts[0]};
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    background: ${(p) => p.theme.colors.background};
  }
`;

export default GlobalStyle;
