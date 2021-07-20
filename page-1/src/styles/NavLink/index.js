import styled from "styled-components";

const NavLink = styled.a`
  font-weight: 300;
  transition: all 0.3s;
  margin: 0 0.5rem;
  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export default NavLink;
