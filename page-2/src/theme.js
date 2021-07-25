const theme = {
  colors: {
    primary: "#f8b600",
    secondary: "#007bff",
    background: {
      primary: "#ffffff",
      secondary: "#f9f9ff",
      dark: "#1e1c27",
    },
    text: {
      primary: "#222222",
      secondary: "#ffffff",
      light: "#ffffff",
      dark: "#222222",
      description: "#777777",
    },
  },
  fonts: {
    title: '"Playfair Display", serif',
    content: '"Roboto", sans-serif',
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    max: {
      sm: "(max-width: 576px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 992px)",
      xl: "(max-width: 1200px)",
    },
    min: {
      sm: "(min-width: 576px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 992px)",
      xl: "(min-width: 1200px)",
    },
  },
};

export default theme;
