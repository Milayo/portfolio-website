import React from 'react';
import "./fullpage.scss";
import LandingSection from '../landing-section/landingpage-section';
import ProjectSection from '../project-section/project-section';
import QuoteSection from '../quotes/quote-section';
import AboutSection from '../about-section/aboutsection';

const FullPage = () => {
  return (
    <div className="fullpage">
      <LandingSection />
      <QuoteSection />
      <ProjectSection />
      <QuoteSection />
      <AboutSection />
    </div>
  );
}

export default FullPage;