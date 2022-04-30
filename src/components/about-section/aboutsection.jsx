import React from "react";
import "./aboutsection.scss";

const AboutSection = () => {
  return (
    <div className="aboutsection" id="about">
      <div
        className="aboutsection_content1"
        data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-offset="300"
      >
        <p className="aboutsection-title">{"<about>"}</p>
        <p className="aboutsection-item">
          Hello World! I'm a front-end web developer with years of experience. I
          enjoy building interactive and responsive websites using modern
          technologies.
        </p>

        <p className="aboutsection-item">
          When I'm not coding, I enjoy reading books or writing articles. I am
          open to learning new technologies and frameworks and collaborating
          with more people in the tech space.
        </p>
        <p className="aboutsection-item">
          Currently, I'm exploring more fields in the Web3 space, and I'm pretty
          enthusiastic about blockchain technologies.
        </p>
        <p className="aboutsection-title">{"</about>"}</p>
      </div>
      <div
        className="aboutsection_content2"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
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
