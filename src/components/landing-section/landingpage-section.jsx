import React from "react";
import "./landingpage-section.scss";

import Header from "../header-section/header.jsx";
import HomeSection from "../home-section/homesection";

const LandingSection = () => {
  return (
    <section>
      <HomeSection />
      {/* <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div> */}

      <div class="bouncingball">
        <h1>Scroll Down &#8595;</h1>
      </div>
    </section>
  );
};

export default LandingSection;
