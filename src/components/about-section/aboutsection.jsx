import React from "react";
import "./aboutsection.scss";

const AboutSection = () => {
  return (
    <div className="aboutsection">
      <div className="aboutsection_content1">
        <p className="aboutsection-title">{"<about>"}</p>
        <p className="aboutsection-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam
          est, minima ea fugiat, explicabo repellendus vitae eius, quisquam ab
          iure? Dolorem doloribus quae quasi ipsum alias fugit eligendi dolor.
        </p>

        <p className="aboutsection-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam
          est, minima ea fugiat, explicabo repellendus vitae eius, quisquam ab
          iure? Dolorem doloribus quae quasi ipsum alias fugit eligendi dolor.
        </p>
        <p className="aboutsection-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam
          est, minima ea fugiat, explicabo repellendus vitae eius, quisquam ab
          iure? Dolorem doloribus quae quasi ipsum alias fugit eligendi dolor.
        </p>
        <p className="aboutsection-title">{"</about>"}</p>
      </div>
      <div className="aboutsection_content2">
        <p className="aboutsection-title">{"<skillset>"}</p>
        <div className="skillset">
          <i class="devicon-html5-plain"></i>
          <i class="devicon-css3-plain"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-react-original"></i>
          <i class="devicon-redux-original"></i>
          <i class="devicon-graphql-plain"></i>
          <i class="devicon-github-original"></i>
          <i class="devicon-heroku-original"></i>
          <i class="devicon-firebase-plain"></i>
          <i class="devicon-sass-original"></i>
          <i class="devicon-solidity-plain"></i>
          <i class="devicon-threejs-original"></i>
          <i class="devicon-vscode-plain"></i>
          <i class="devicon-yarn-plain"></i>
          <i class="devicon-redhat-plain"></i>
          <i class="devicon-materialui-plain"></i>
          <i class="devicon-canva-original"></i>
          <i class="devicon-jira-plain"></i>
        </div>

        <p className="aboutsection-title">{"</skillset>"}</p>
      </div>
    </div>
  );
};

export default AboutSection;
