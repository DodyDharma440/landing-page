import React from "react";
import styled from "styled-components";
import { FcServices, FcWorkflow } from "react-icons/fc";
import { Section, Container, Row, Button } from "styles";
import { FeatureCard } from "components";
import HeroImage from "assets/images/hero_1.jpg.webp";

const ContentLeft = styled.div`
  width: 40%;
  margin-bottom: 5rem;
  @media ${(p) => p.theme.breakpoints.down.lg} {
    margin-bottom: 0;
  }
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 100%;
  }
`;

const ContentRight = styled.div`
  width: 50%;
  margin-bottom: 5rem;
  position: relative;
  @media ${(p) => p.theme.breakpoints.down.lg} {
    margin-bottom: 0;
  }
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const Caption = styled.p`
  color: ${(p) => p.light && "#fff"};
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

const BoxCaption = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundDark};
  padding: 50px;
  color: #fff;
  position: absolute;
  bottom: -40px;
  left: -50px;
  right: 50px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const SquareBg = styled.div`
  ::before {
    content: "";
    width: 100%;
    height: 70%;
    background: #dae1e7;
    position: absolute;
    z-index: -1;
    bottom: -70px;
    left: 40%;
  }
`;

const Features = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <Row>
          <ContentLeft>
            <Title>Create, Code, and Published.</Title>
            <Caption>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Caption>
            <Button
              rounded="lg"
              style={{ padding: "0.8rem 1.8rem", marginBottom: "2rem" }}
            >
              Get Started
            </Button>
            <Features>
              <FeatureCard
                icon={<FcServices size={60} />}
                title="High Quality"
                description="Far far away, behind the word mountains, far from the countries"
              />
              <FeatureCard
                icon={<FcWorkflow size={60} />}
                title="Fast Services"
                description="Far far away, behind the word mountains, far from the countries"
              />
            </Features>
          </ContentLeft>
          <ContentRight>
            <SquareBg />
            <figure>
              <Image src={HeroImage} alt="Hero Illustration" />
              <BoxCaption>
                <Caption light>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </Caption>
                <strong>John Doe</strong>
                <br />
                <span style={{ color: "#fff" }}>Founder @Design</span>
              </BoxCaption>
            </figure>
          </ContentRight>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;
