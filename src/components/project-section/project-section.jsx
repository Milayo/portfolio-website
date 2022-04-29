import React from "react";
import "./project-section.scss";
import ProjectItems from "./projectitems";

const ProjectSection = () => {
  return (
    <div className="projectsection" id="work">
      <p className="projectsection-title">{"<work>"}</p>
      {ProjectItems.map(
        ({ id, title, description, websiteLink, videoDemo, githubLink }) => (
          <div className="projectsection-item" key={id}>
            <p className="projectsection-item-title">{title}</p>
            <p>{description}</p>
            <div className="projectsection-footer">
              <a href={`${websiteLink}`}>VISIT WEBSITE</a>
              <a href={`${videoDemo}`}>VIDEO DEMO</a>
              <a href={`${githubLink}`}>SOURCE CODE</a>
            </div>
          </div>
        )
      )}

      <p className="projectsection-title">{"</work>"}</p>
    </div>
  );
};

export default ProjectSection;
