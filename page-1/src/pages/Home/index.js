import React from "react";
import {
  Header,
  Hero,
  AchievementsCount,
  HowItWorks,
  Services,
  Footer,
  About,
  Blog,
} from "components";

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
      <Footer background="background2" />
    </>
  );
};

export default Home;
