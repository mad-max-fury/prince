import React from "react";
import ContactMe from "../../containers/contactme";
import Hero from "../../containers/hero";
import ProductSection from "../../containers/productslider";
import Fade from "react-reveal/Fade";
import { LandingPageWrapper } from "./style";

const LandingPage = () => {
  return (
    <>
      <Fade bottom>
        <LandingPageWrapper>
          <div style={{ backgroundImage: `url('images/heroBg.svg')` }}></div>
          <div className="blurBg"></div>
          <Hero />
        </LandingPageWrapper>
      </Fade>
      <ProductSection />
      <ContactMe />
    </>
  );
};

export default LandingPage;
