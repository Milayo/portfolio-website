import React from "react";
import "./landingpage-section.scss";
import Fade from "react-reveal/Fade";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Avatar from "../../images/ReadyPlayerMe-Avatar.png";

import HomeSection from "../home-section/homesection";

const LandingSection = () => {
  return (
    <div>
      <section>
        {" "}
        <HomeSection />
        <Fade right>
          <div className="model">
            {" "}
            <img src={Avatar} alt="Tomi's Avatar" className="avatar" />
          </div>
        </Fade>
        {/* <div className="model">
        {" "}
        <Canvas>
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
            <Environment preset="night" background={false} />
          </Suspense>
        </Canvas>
      </div> */}
      </section>
      <div className="scrollbar">
        <span className="mouse">
          <span className="mouse-wheel"></span>
        </span>
      </div>
    </div>
  );
};

export default LandingSection;
