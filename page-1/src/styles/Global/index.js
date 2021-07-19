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
    line-height: 1.8;
  }
  a {
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6,p,span,a,strong {
    color: ${(p) => p.theme.colors.textDefault}
  }
`;

export default GlobalStyle;
