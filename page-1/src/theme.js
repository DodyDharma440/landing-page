const theme = {
  colors: {
    primary: "#1264fa",
    textLight: "#fff",
    textDark: "#222222",
    textDefault: "#000839",
    background: "#fff",
    background2: "#f8f9fa",
    backgroundDark: "#000839",
  },
  fonts: ["'Poppins', sans-serif"],
  fontSize: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
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
