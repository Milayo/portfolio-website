import React from 'react';
import LandingSection from '../landing-section/landingpage-section';
import ProjectSection from '../project-section/project-section';
import QuoteSection from '../quotes/quote-section';

const FullPage = () => {
  return (
    <div>
        <LandingSection />
        <QuoteSection />
        <ProjectSection />
    </div>
  );
}

export default FullPage;