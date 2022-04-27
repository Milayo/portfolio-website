import React from "react";
import "./project-section.scss";
import ProjectItems from "./projectitems";

const ProjectSection = () => {
  return (
    <div className="projectsection" id="work">
      <p className="projectsection-title">{"<work>"}</p>
        {ProjectItems.map(({ id, title, description }) => (
          <div className="projectsection-item" key={id}>
            <p className="projectsection-item-title">{title}</p>
            <p>{description}</p>
            <div className="projectsection-footer">
              <p>VISIT WEBSITE</p>
              <p>VIDEO DEMO</p>
              <p>SOURCE CODE</p>
            </div>
          </div>
        ))}
    
      <p className="projectsection-title">{"</work>"}</p>
    </div>
  );
};

export default ProjectSection;
