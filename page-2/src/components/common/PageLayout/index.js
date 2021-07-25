import React from "react";
import { Header } from "components/common";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
