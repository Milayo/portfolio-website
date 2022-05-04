import React from "react";
import "./project-section.scss";
import ProjectItems from "./projectitems";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const fade = {
    y: [50, 0],
    opacity: [0, 1],
    transition: {
      delay: 1.5,
      duration: .5,
    },
  };
  const reveler = {
    backgroundColor: "#ff5277",
    width: ["0%", "100%", "0%"],
    right: ["100%", "0%", "100%"],
    transition: {
      delay: 0,
      duration: 1.5,
    },
  };
  return (
    <div className="projectsection" id="work">
      <p className="projectsection-title">{"<work>"}</p>
      {ProjectItems.map(
        ({ id, title, description, websiteLink, videoDemo, githubLink }) => (
          <div className="projectsection-item" key={id}>
            <motion.div whileInView={fade} initial={{ y: 50, opacity: 0}}>
              <p className="projectsection-item-title">{title}</p>
              <p>{description}</p>
              <div className="projectsection-footer">
                <a href={`${websiteLink}`}>VISIT WEBSITE</a>
                <a href={`${videoDemo}`}>VIDEO DEMO</a>
                <a href={`${githubLink}`}>SOURCE CODE</a>
              </div>
            </motion.div>
            <motion.div
              className="projectsection-reveler"
              whileInView={reveler}
              initial={{ width: "0%", right: "100%" }}
            ></motion.div>
          </div>
        )
      )}
      <p className="projectsection-title">{"</work>"}</p>
    </div>
  );
};

export default ProjectSection;
