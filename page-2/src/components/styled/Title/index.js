import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: ${(p) => p.light && p.theme.colors.text.light};
`;

export default Title;
