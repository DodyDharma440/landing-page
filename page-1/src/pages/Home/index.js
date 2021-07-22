import React from "react";
import styled from "styled-components";
import { HiArrowNarrowUp } from "react-icons/hi";
import {
  Header,
  Hero,
  AchievementsCount,
  HowItWorks,
  Services,
  Footer,
  About,
  Blog,
  Contact,
} from "components";

const ScrollTopBtn = styled.button`
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: 10px;
  width: 45px;
  height: 45px;
  margin: 1rem;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  border: 0;
  cursor: pointer;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
  :focus {
    outline: none;
  }
`;

const Link = styled.a``;

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AchievementsCount />
      <HowItWorks />
      <Services />
      <About />
      <Blog />
      <Contact />
      <Footer background="background2" />
      <Link href="#">
        <ScrollTopBtn>
          <HiArrowNarrowUp color="#fff" />
        </ScrollTopBtn>
      </Link>
    </>
  );
};

export default Home;
