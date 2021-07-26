import styled from "styled-components";

const Container = styled.div`
  margin: 0px auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding: ${(p) => p.noPadding && "0"};
  width: ${(p) => p.fluid && "100%"} !important;
  max-width: ${(p) => p.fluid && "100%"} !important;
  @media ${(p) => p.theme.breakpoints.min.sm} {
    max-width: 540px;
  }
  @media ${(p) => p.theme.breakpoints.min.md} {
    max-width: 720px;
  }
  @media ${(p) => p.theme.breakpoints.min.lg} {
    max-width: 960px;
  }
  @media ${(p) => p.theme.breakpoints.min.xl} {
    max-width: 1140px;
  }
`;

export default Container;
