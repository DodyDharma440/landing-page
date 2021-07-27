import React from "react";
import { PageLayout } from "components/common";
import { Hero, Popular } from "components/features";

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <Popular />
    </PageLayout>
  );
};

export default Home;
