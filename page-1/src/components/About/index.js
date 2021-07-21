import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel";
import { Section, Container, Button as ButtonStyle, Row } from "styles";
import { testimonials } from "constants/testimonials";

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

const CarouselWrapper = styled.div`
  min-height: 100%;
`;

const CarouselItem = styled.div`
  max-width: ${(p) => p.theme.breakpoints.sm};
  padding-top: 2rem;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
  text-align: center;
`;

const Avatar = styled.img`
  width: 70px !important;
  height: 70px;
  border-radius: 50%;
`;

const TestiDesc = styled.p`
  margin: 1rem 0;
`;

const TestiName = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
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
        <CarouselWrapper>
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus={false}
            // renderArrowNext={(clickHandler, hasNext, label) => (
            //   <HiArrowNarrowRight onClick={clickHandler} />
            // )}
            // renderArrowPrev={(clickHandler, hasPrev, label) => (
            //   <HiArrowNarrowLeft onClick={clickHandler} />
            // )}
          >
            {testimonials.map((el, id) => (
              <CarouselItem key={id}>
                <Avatar src={el.avatar} />
                <TestiDesc>{`"${el.description}"`}</TestiDesc>
                <TestiName>{el.name}</TestiName>
                <p>{el.work}</p>
              </CarouselItem>
            ))}
          </Carousel>
        </CarouselWrapper>
      </Section>
    </>
  );
};

export default About;
