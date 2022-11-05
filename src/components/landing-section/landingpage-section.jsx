import React from "react";
import "./landingpage-section.scss";
import { motion } from "framer-motion";
import Avatar from "../../images/ReadyPlayerMe-Avatar.png";

import HomeSection from "../home-section/homesection";

const LandingSection = () => {
   const fade = {
     opacity: 1,
     transition: {
       delay: 0,
       x: { type: "spring", stiffness: 60 },
       duration: 1,
     },
   };
  return (
    <div>
      <section>
        {" "}
        <HomeSection />
        <motion.div
          className="model"
          whileInView={fade}
          initial={{ opacity: "0.2" }}
        >
          {" "}
          <img src={Avatar} alt="Tomi's Avatar" className="avatar" />
        </motion.div>
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
