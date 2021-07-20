import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-weight: bold;
  opacity: 0.7;
  color: ${(p) => p.theme.colors.textDark};
`;

const Wrapper = styled.div`
  line-height: 1.2;
  text-align: ${(p) => (p.align ? p.align : "left")};
  margin-bottom: 2rem;
  width: ${(p) => p.fullWidth && "100%"};
  @media ${(p) => p.theme.breakpoints.down.lg} {
    width: ${(p) => (p.fullWidth ? "100%" : "60%")};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
  }
`;

const Title = ({ title, subtitle, align, fullWidth, ...props }) => {
  return (
    <Wrapper align={align} fullWidth={fullWidth} {...props}>
      <Subtitle>{subtitle}</Subtitle>
      <TitleText>{title}</TitleText>
    </Wrapper>
  );
};

export default Title;
