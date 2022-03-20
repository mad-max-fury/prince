import React from "react";
import { Fade } from "react-reveal";
import About from "../../containers/About";
import Footer from "../../containers/footer";
import TopNavBar from "../../containers/navBar";
import { AboutPageWrapper } from "./style";

const AboutPage = () => {
  return (
    <Fade right>
      <AboutPageWrapper style={{ height: "80vh" }}>
        <About />
      </AboutPageWrapper>
    </Fade>
  );
};

export default AboutPage;
