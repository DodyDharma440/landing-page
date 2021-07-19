import React from "react";
import styled from "styled-components";
import { FcShipped, FcReadingEbook, FcDataSheet } from "react-icons/fc";
import { Section, Container } from "styles";
import { Title, FeatureCard } from "components";

const Features = styled.div`
  width: 85%;
  margin: 0px auto;
  display: flex;
  gap: 5rem;
  align-items: center;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    flex-wrap: wrap;
    width: 100%;
    gap: 0;
  }
`;

const CardWrapper = styled.div`
  margin-bottom: 2rem;
`;

const HowItWorks = () => {
  return (
    <Section id="works">
      <Container>
        <Title
          align="center"
          title="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          subtitle="How It Works"
        />
        <Features>
          <CardWrapper>
            <FeatureCard
              icon={<FcReadingEbook size={60} />}
              title="1. Create an account"
              description="Connect your store, import your products, then send us your inventory."
            />
          </CardWrapper>
          <CardWrapper>
            <FeatureCard
              icon={<FcDataSheet size={60} />}
              title="2. Create new orders"
              description="We store your inventory in any combination of our fulfillment centers."
            />
          </CardWrapper>
          <CardWrapper>
            <FeatureCard
              icon={<FcShipped size={60} />}
              title="3. Ship and track"
              description="As soon as a customer places an order, we ship it from nearest fulfillment center."
            />
          </CardWrapper>
        </Features>
      </Container>
    </Section>
  );
};

export default HowItWorks;
