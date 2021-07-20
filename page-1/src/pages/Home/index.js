import React from "react";
import {
  Header,
  Hero,
  AchievementsCount,
  HowItWorks,
  Services,
  Footer,
} from "components";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AchievementsCount />
      <HowItWorks />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
