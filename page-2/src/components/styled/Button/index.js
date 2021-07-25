import styled from "styled-components";

export const ArrowIcon = styled.div`
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

const Button = styled.button`
  color: ${(p) =>
    p.variant ? p.theme.colors.text[p.variant] : p.theme.colors.text.primary};
  border: 1px solid
    ${(p) => (p.variant ? p.theme.colors[p.variant] : p.theme.colors.primary)};
  padding: 0.9rem 1.8rem;
  padding-right: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  background: transparent;
  outline: none;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  position: relative;
  :hover {
    cursor: pointer;
    background-color: ${(p) =>
      p.variant ? p.theme.colors[p.variant] : p.theme.colors.primary};
  }
  :hover ${ArrowIcon} {
    transform: translateX(0.5rem);
  }
`;

export default Button;
