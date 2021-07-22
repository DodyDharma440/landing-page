import React from "react";
import styled from "styled-components";
import { Section, Container, Button as ButtonStyle, Row } from "styles";
import { Testimonials } from "components";

const Content = styled.div`
  max-width: ${(p) => p.theme.breakpoints.md};
`;

const RowContent = styled.div`
  width: 48%;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 45px;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Button = styled(ButtonStyle)`
  padding: 0.8rem 1.5rem;
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <>
      <Section id="about">
        <Container>
          <Content>
            <Title>About Us</Title>
            <Description>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Description>
            <Button>Contact Us</Button>
          </Content>
          <Row align="flex-start">
            <RowContent>
              <Description>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
                <br />
                <br />A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a paradisematic
                country, in which roasted parts of sentences fly into your
                mouth.
              </Description>
            </RowContent>
            <RowContent>
              <Description>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
                <br />
                <br />
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </Description>
            </RowContent>
          </Row>
        </Container>
      </Section>
      <Section>
        <Testimonials />
      </Section>
    </>
  );
};

export default About;
