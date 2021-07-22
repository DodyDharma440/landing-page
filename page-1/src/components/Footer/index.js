import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialDribbble,
  TiSocialLinkedin,
} from "react-icons/ti";
import { Section, Container, Row, Divider, NavLink } from "styles";

const Copyright = styled.p`
  margin: 2rem;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  vertical-align: middle;
`;

const ContentLeft = styled.div`
  width: 40%;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

const ContentRight = styled.div`
  width: 50%;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 100%;
  }
`;

const Title = styled.h3`
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-weight: 300;
  margin-bottom: 2rem;
`;

const IconSocials = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconSocial = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  transition: all 0.3s;
  :hover {
    color: ${(p) => p.theme.colors.primary};
    cursor: pointer;
  }
`;

const Navigations = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListNav = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  line-height: 2.2;
  margin-bottom: 1rem;
  @media ${(p) => p.theme.breakpoints.up.md} {
    width: 50%;
  }
`;

const Footer = ({ background }) => {
  return (
    <>
      <Section background={background}>
        <Container>
          <Row align="flex-start">
            <ContentLeft>
              <Title>About Design</Title>
              <Description>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live.
              </Description>
              <Title>Follow Our Social Media</Title>
              <IconSocials>
                <IconSocial>
                  <TiSocialFacebook size={20} />
                </IconSocial>
                <IconSocial>
                  <TiSocialTwitter size={20} />
                </IconSocial>
                <IconSocial>
                  <TiSocialInstagram size={20} />
                </IconSocial>
                <IconSocial>
                  <TiSocialDribbble size={20} />
                </IconSocial>
                <IconSocial>
                  <TiSocialLinkedin size={20} />
                </IconSocial>
              </IconSocials>
            </ContentLeft>
            <ContentRight>
              <Title>Navigations</Title>
              <Navigations>
                <ListNav>
                  <NavLink href="#">Home</NavLink>
                  <NavLink href="#">Services</NavLink>
                  <NavLink href="#">Work</NavLink>
                  <NavLink href="#">Process</NavLink>
                  <NavLink href="#">About Us</NavLink>
                </ListNav>
                <ListNav>
                  <NavLink href="#">Press</NavLink>
                  <NavLink href="#">Blog</NavLink>
                  <NavLink href="#">Contact</NavLink>
                  <NavLink href="#">Support</NavLink>
                  <NavLink href="#">Privacy</NavLink>
                </ListNav>
                <ListNav>
                  <NavLink href="#">Privacy</NavLink>
                  <NavLink href="#">FAQ</NavLink>
                  <NavLink href="#">Careers</NavLink>
                  <NavLink href="#">Process</NavLink>
                  <NavLink href="#">About Us</NavLink>
                </ListNav>
              </Navigations>
            </ContentRight>
          </Row>
        </Container>
      </Section>
      <Container>
        <Divider />
        <Copyright>
          Copyright ©2021 All rights reserved | This website is made with{" "}
          <FaHeart size={12} color="#d33" /> design from{" "}
          <NavLink
            href="https://preview.colorlib.com/theme/design/index.html"
            target="_blank"
            style={{ margin: 0 }}
          >
            Colorlib
          </NavLink>
        </Copyright>
      </Container>
    </>
  );
};

export default Footer;
