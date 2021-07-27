import React from "react";
import styled from "styled-components";

const IconWrapper = styled.span`
  color: ${(p) => p.theme.colors.secondary};
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0.5rem 0;
`;

const Card = styled.div`
  padding: 2rem;
  background: transparent;
  border: 1px solid #ddd;
  height: 180px;
  width: 165px;
  transition: all 0.3s;
  text-align: center;
  :hover {
    border: 1px solid ${(p) => p.theme.colors.secondary};
    background-color: ${(p) => p.theme.colors.secondary};
  }
  :hover * {
    color: ${(p) => p.theme.colors.text.light};
  }
`;

const CounterCard = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <p>{description}</p>
    </Card>
  );
};

export default CounterCard;
