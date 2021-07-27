import React from "react";
import styled from "styled-components";
import {
  Section,
  Container,
  FlexRow,
  Title,
  Description,
} from "components/styled";
import { CounterCard } from "components/common";
import { countData } from "custom-constants";
import { PopularImage1, PopularImage2, PopularImage3 } from "assets/images";
import { useScreenWidth } from "hooks";

const RowContent = styled.div`
  width: 40%;
  @media ${(p) => p.theme.breakpoints.max.lg} {
    width: 100%;
  }
`;

const LeftContent = styled.div`
  width: 40%;
  margin-top: 2rem;
  @media ${(p) => p.theme.breakpoints.max.lg} {
    width: 100%;
    display: none;
  }
  @media ${(p) => p.theme.breakpoints.min.lg} {
    margin-right: 8rem;
  }
`;

const CounterWrapper = styled.div`
  text-align: center;
  @media ${(p) => p.theme.breakpoints.min.lg} {
    margin-left: -1rem;
    text-align: left;
  }
`;

const CounterCardWrapper = styled.div`
  display: inline-block;
  margin: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Image2 = styled(Image)`
  position: absolute;
  left: 50%;
  top: 2%;
`;
const Image3 = styled(Image)`
  position: absolute;
  bottom: -10%;
  left: -30%;
`;

const Popular = () => {
  const screenWidth = useScreenWidth();

  return (
    <Section>
      <Container>
        <FlexRow justify="flex-end" align="flex-start" gap="2rem">
          {screenWidth > 992 && (
            <LeftContent style={{ position: "relative" }}>
              <Image src={PopularImage1} />
              <Image2 src={PopularImage2} />
              <Image3 src={PopularImage3} />
            </LeftContent>
          )}
          <RowContent>
            <Title>
              Popular
              <br /> Places Around
              <br /> The World
            </Title>
            <Description marginBottom="70px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </Description>
            <CounterWrapper>
              {countData.map(({ icon, place, count }, index) => (
                <CounterCardWrapper key={index}>
                  <CounterCard
                    icon={icon}
                    title={place}
                    description={`${count} Places`}
                  />
                </CounterCardWrapper>
              ))}
            </CounterWrapper>
          </RowContent>
        </FlexRow>
      </Container>
    </Section>
  );
};

export default Popular;
