import React from "react";
import styled from "styled-components";
import { IconWrapper } from "styles";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Description = styled.p`
  color: ${(p) => p.theme.colors.textDark};
  opacity: 0.6;
  font-size: 0.9rem;
`;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default FeatureCard;
