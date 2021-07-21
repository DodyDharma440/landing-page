import styled from "styled-components";

const Section = styled.section`
  padding: ${(p) => (p.noPadding ? 0 : "70px 0px")};
  background-color: ${(p) =>
    p.background ? p.theme.colors[p.background] : "#fff"};
`;

export default Section;
