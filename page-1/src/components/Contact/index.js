import React from "react";
import styled from "styled-components";
import { Section, Container, Row, Avatar } from "styles";
import { Title } from "components";
import avatar3 from "assets/images/avatar3.jpg";

const ContentLeft = styled.div`
  width: 40%;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 100%;
    order: 2;
  }
`;

const ContentRight = styled.div`
  width: 50%;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 100%;
    order: 1;
    margin-bottom: 2rem;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  transition: all 0.3s;
  margin-bottom: 0.8rem;
  :focus {
    outline: none;
    border: 2px solid ${(p) => p.theme.colors.primary};
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  min-height: ${(p) => (p.minHeight ? p.minHeight : "300px")};
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  transition: all 0.3s;
  margin-bottom: 0.8rem;
  :focus {
    outline: none;
    border: 2px solid ${(p) => p.theme.colors.primary};
  }
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const NameGroup = styled.div`
  width: 100%;
`;

const Label = styled.label`
  line-height: 2.5;
`;

const QuoteCard = styled.div`
  background-color: ${(p) => p.theme.colors.background2};
  border-radius: 2rem;
  border-bottom-left-radius: 0;
  padding: 2rem 5rem;
`;

const AvatarWrapper = styled.div`
  text-align: center;
`;

const Description = styled.p`
  font-weight: bold;
  margin: 3rem 0;
`;

const Owner = styled.div`
  margin-bottom: 3rem;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Row align="flex-start">
          <ContentLeft>
            <QuoteCard>
              <AvatarWrapper>
                <Avatar width="80px" height="80px" src={avatar3} />
              </AvatarWrapper>
              <Description>
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live.A small river named Duden flows by their place and
                supplies it with the necessary regelialia.”
              </Description>
              <Owner>
                <strong>John Doe</strong>
                <p>Founder @Colorlib</p>
              </Owner>
            </QuoteCard>
          </ContentLeft>
          <ContentRight>
            <Title fullWidth title="Let's have a talk" subtitle="Contact Us" />
            <NameWrapper>
              <NameGroup>
                <Label>First name</Label>
                <InputField />
              </NameGroup>
              <NameGroup>
                <Label>Last name</Label>
                <InputField />
              </NameGroup>
            </NameWrapper>
            <Label>Your email</Label>
            <InputField />
            <Label>Message</Label>
            <TextareaField />
          </ContentRight>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
