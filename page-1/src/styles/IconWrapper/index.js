import styled from "styled-components";

const IconWrapper = styled.div`
  padding-left: 1rem;
  position: relative;
  ::before {
    left: -2px;
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    background-color: ${(p) => p.theme.colors.primary};
    z-index: -1;
    opacity: 0.1;
  }
`;

export default IconWrapper;
