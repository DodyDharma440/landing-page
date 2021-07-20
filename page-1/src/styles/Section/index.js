import styled from "styled-components";

const Section = styled.section`
  padding: ${(p) => (p.noPadding ? 0 : "70px 0px")};
`;

export default Section;
