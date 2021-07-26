import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0px;
  padding-top: ${(p) => p.paddingTop && p.paddingTop} !important;
  background-color: ${(p) =>
    p.background
      ? p.theme.colors.background[p.background]
      : p.theme.colors.background.primary};
`;

export default Section;
