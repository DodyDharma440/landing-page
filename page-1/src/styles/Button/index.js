import styled from "styled-components";

const borderRadius = (p) => {
  switch (p.rounded) {
    case "sm":
      return "0.5rem";

    case "md":
      return "1rem";

    case "lg":
      return "1.5rem";

    default:
      return "1rem";
  }
};

const Button = styled.button`
  background-color: ${(p) =>
    p.variant === "outlined" ? "transparent" : p.theme.colors.primary};
  opacity: ${(p) => (!p.variant || p.variant === "contained" ? 0.9 : 1)};
  padding: 0.5rem 1rem;
  border-radius: ${(p) => borderRadius(p)};
  transition: all 0.3s;
  font-size: 1rem;
  color: ${(p) => (p.variant === "outlined" ? p.theme.colors.primary : "#fff")};
  border: ${(p) => (p.variant === "outlined" ? "1px solid #ccc" : 0)};
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
    background-color: ${(p) => p.theme.colors.primary};
    color: #fff;
    border: ${(p) =>
      p.variant === "outlined"
        ? `1px solid ${(p) => p.theme.colors.primary}`
        : 0};
    cursor: pointer;
  }
`;

export default Button;
