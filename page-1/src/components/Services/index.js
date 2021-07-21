import React from "react";
import styled from "styled-components";
import {
  Section as SectionStyle,
  Container,
  Row,
  Button as ButtonStyle,
} from "styles";
import { Title } from "components";
import ServicesImage from "assets/images/services.webp";
import DottedImage from "assets/images/dotted.webp";

const Section = styled(SectionStyle)`
  position: relative;
  z-index: 1;
`;

const ContentLeft = styled.div`
  width: 35%;
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

const Image = styled.img`
  max-width: 100%;
  z-index: 2;
`;

const Description = styled.p`
  font-weight: 300;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  margin-bottom: 2rem;
  font-weight: 300;
  list-style: none;
`;

const ListItem = styled.li`
  color: ${(p) => p.theme.colors.textDefault};
  ::before {
    content: ">";
    margin-right: 10px;
  }
`;

const Button = styled(ButtonStyle)`
  padding: 0.8rem 1.8rem;
`;

const Dotted = styled.div`
  ::before {
    content: "";
    background-image: url(${DottedImage});
    width: 300px;
    height: 250px;
    position: absolute;
    background-repeat: no-repeat;
    z-index: -1;
    left: -50px;
    bottom: -50px;
  }
`;

const Figure = styled.figure`
  margin-top: -120px;
  position: relative;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    margin-top: 0;
  }
`;

const Services = () => {
  return (
    <Section id="services" background="background2">
      <Container>
        <Row>
          <ContentLeft>
            <Title
              fullWidth
              title="Far far away, behind the word mountains"
              subtitle="Services"
              style={{ marginBottom: "1rem" }}
            />
            <Description>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live.
            </Description>
            <List>
              <ListItem>Behind the word Mountains.</ListItem>
              <ListItem>Far far away Mountains.</ListItem>
              <ListItem>Large language Ocean.</ListItem>
            </List>
            <Button rounded="lg">Get Started</Button>
          </ContentLeft>
          <ContentRight>
            <Figure>
              <Dotted />
              <Image src={ServicesImage} />
            </Figure>
          </ContentRight>
        </Row>
      </Container>
    </Section>
  );
};

export default Services;
