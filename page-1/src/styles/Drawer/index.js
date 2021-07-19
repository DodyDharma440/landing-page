import styled from "styled-components";

const Drawer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(p) => (!p.position || p.position === "left" ? 0 : "unset")};
  right: ${(p) => (p.position === "right" ? 0 : "unset")};
  width: 300px;
  background-color: ${(p) => (p.background ? p.background : "#fff")};
  z-index: 100;
`;

export const Overlay = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: #000;
  opacity: 0.7;
  z-index: 99;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export default Drawer;
