import React from "react";
import styled, { keyframes } from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { Button } from "components/common";
import { Section, Container, FlexRow as FlexRowStyle } from "components/styled";
import { HeroImage } from "assets/images";
import { useScreenWidth } from "hooks";

const PingAnimation = keyframes`
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.9;
  }
`;

const FlexRow = styled(FlexRowStyle)`
  @media ${(p) => p.theme.breakpoints.min.lg} {
    flex-wrap: nowrap;
  }
`;

const RowContent = styled.div`
  width: 50%;
  @media ${(p) => p.theme.breakpoints.max.lg} {
    width: 100%;
  }
`;

const TitleRow = styled.div`
  @media ${(p) => p.theme.breakpoints.min.lg} {
    width: calc(1140px / 2);
    margin-left: auto;
    padding-left: 3rem;
    padding-right: 8rem;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 1;
  margin-bottom: 2rem;
  color: ${(p) => p.light && p.theme.colors.text.light};
`;

const Description = styled.p`
  margin-bottom: 2rem;
  color: ${(p) => p.light && p.theme.colors.text.light};
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

const PlayPopup = styled.div`
  display: flex;
  left: -60px;
  bottom: 4rem;
  position: absolute;
`;

const PlayButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.background.secondary};
    animation: ${PingAnimation} 4s infinite;
    z-index: 0;
  }
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 1;
    background-color: ${(p) => p.theme.colors.secondary};
  }
`;

const MobileHeroContainer = styled.div`
  background-image: url(${HeroImage});
  background-position: center;
  background-size: cover;
  min-height: 300px;
`;

const MobileHeroContent = styled.div`
  padding: 5rem 1.5rem;
  width: 100%;
  min-height: 300px;
  backdrop-filter: brightness(60%);
`;

const DesktopHero = () => (
  <FlexRow position="relative" gap="1rem">
    <RowContent>
      <TitleRow>
        <Title>Santorini Island in Greece</Title>
        <Description>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each.
        </Description>
        <Button>Get Started</Button>
      </TitleRow>
    </RowContent>
    <RowContent style={{ position: "relative", zIndex: 2 }}>
      <PlayPopup>
        <PlayButton href="https://youtube.com" rel="noreferrer" target="_blank">
          <BsFillPlayFill
            style={{ marginLeft: "0.5rem", zIndex: 2 }}
            size={60}
            color="#fff"
          />
        </PlayButton>
      </PlayPopup>
      <Image src={HeroImage} />
    </RowContent>
  </FlexRow>
);

const MobileHero = () => (
  <MobileHeroContainer>
    <MobileHeroContent>
      <Title style={{ fontSize: 36 }} light>
        Santorini Island in Greece
      </Title>
      <Description light>
        If you are looking at blank cassettes on the web, you may be very
        confused at the difference in price. You may see some for as low as $.17
        each.
      </Description>
      <Button text="light">Get Started</Button>
    </MobileHeroContent>
  </MobileHeroContainer>
);

const Hero = () => {
  const windowWidth = useScreenWidth();

  return (
    <Section paddingTop="0">
      <Container fluid noPadding>
        {windowWidth > 992 ? <DesktopHero /> : <MobileHero />}
      </Container>
    </Section>
  );
};

export default Hero;
