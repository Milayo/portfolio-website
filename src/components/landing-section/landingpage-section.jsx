import React from "react";
import "./landingpage-section.scss";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../model.js";

import HomeSection from "../home-section/homesection";

const LandingSection = () => {
  return (
    <section>
      <HomeSection />{" "}
      <div className="model">
        {" "}
        <Canvas>
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
            <Environment preset="night" background={false} />
          </Suspense>
        </Canvas>
        <div className="tooltiptext">Drag Me</div>
      </div>
      {/* <Spline
        className="boy"
        scene="https://prod.spline.design/qpyQFxCmO9AVfvDX/scene.spline"
      /> */}
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
