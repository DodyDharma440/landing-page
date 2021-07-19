import React from "react";
import styled from "styled-components";
import { Section, Container, Row } from "styles";
import { achievementsCount } from "constants/achievementsCount";

const Card = styled.div`
  width: calc(100% / ${achievementsCount.length});
  height: 100px;
  padding: 0px 0.5rem;
  text-align: center;
  line-height: 1.4;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: calc(100% / ${achievementsCount.length / 2});
    margin-bottom: 5rem;
  }
  @media ${(p) => p.theme.breakpoints.up.md} {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const NumberCount = styled.h1`
  font-size: 42px;
  margin-bottom: 0.5rem;
`;

const Title = styled.h4`
  font-weight: 300;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-weight: 300;
  opacity: 0.7;
`;

const AchievementsCount = () => {
  return (
    <Section id="achievements">
      <Container>
        <Row>
          {achievementsCount.map(({ count, title, description }, index) => (
            <Card key={index}>
              <NumberCount>{count}</NumberCount>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Card>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default AchievementsCount;
