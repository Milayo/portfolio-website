import React from "react";
import "./landingpage-section.scss";
import Spline from "@splinetool/react-spline";


import HomeSection from "../home-section/homesection";

const LandingSection = () => {
  return (
    <section>
      {/* <HomeSection /> */}
      <Spline
        className="boy"
        scene="https://prod.spline.design/qpyQFxCmO9AVfvDX/scene.spline"
      />
      {/* <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div> */}
      {/* <div class="bouncingball">
        <h1>Scroll Down &#8595;</h1>
      </div> */}
    </section>
  );
};

export default LandingSection;


 