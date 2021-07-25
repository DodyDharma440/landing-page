import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(p) => p.theme.fonts.content};
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    background-color: ${(p) => p.theme.colors.background.primary};
    line-height: 27px;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(p) => p.theme.fonts.title};
    color: ${(p) => p.theme.colors.text.dark};
  }
  span, a, strong, label, p {
    font-family: ${(p) => p.theme.fonts.description};
  }
  span, p {
    color: ${(p) => p.theme.colors.text.description};
  }
  label, strong, a {
    color: ${(p) => p.theme.colors.text.dark};
  }
  #root {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
