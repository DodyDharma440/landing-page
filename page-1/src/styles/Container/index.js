import styled from "styled-components";

const Container = styled.div`
  margin: 0px auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media ${(p) => p.theme.breakpoints.down.sm} {
    max-width: 540px;
  }
  @media ${(p) => p.theme.breakpoints.down.md} {
    max-width: 720px;
  }
  @media ${(p) => p.theme.breakpoints.down.lg} {
    max-width: 960px;
  }
  @media ${(p) => p.theme.breakpoints.down.xl} {
    max-width: 1140px;
  }
`;

export default Container;
