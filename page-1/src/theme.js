const theme = {
  colors: {
    primary: "#1264fa",
    textLight: "#fff",
    textDark: "#000839",
    textDefault: "#222222",
    background: "#fff",
  },
  fonts: ["'Poppins', sans-serif"],
  fontSize: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
  },
  breakpoints: {
    up: {
      sm: "(max-width: 576px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 992px)",
      xl: "(max-width: 1200px)",
    },
    down: {
      sm: "(min-width: 576px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 992px)",
      xl: "(min-width: 1200px)",
    },
  },
};

export default theme;
