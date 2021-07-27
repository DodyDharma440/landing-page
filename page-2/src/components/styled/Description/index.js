import styled from "styled-components";

const Description = styled.p`
  margin-bottom: ${(p) => p.marginBottom && p.marginBottom};
  margin-top: ${(p) => p.marginTop && p.marginTop};
  margin-right: ${(p) => p.marginRight && p.marginRight};
  margin-left: ${(p) => p.marginLeft && p.marginLeft};
  margin: ${(p) => p.margin && p.margin};
  color: ${(p) =>
    p.fontColor ? p.fontColor : p.theme.colors.text.description};
`;

export default Description;
