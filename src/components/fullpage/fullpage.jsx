import React from "react";
import "./fullpage.scss";
import LandingSection from "../landing-section/landingpage-section";
import ProjectSection from "../project-section/project-section";
import QuoteSection from "../quotes/quote-section";
import AboutSection from "../about-section/aboutsection";
import ContactSection from "../contact-section/contact-section";
import Footer from "../footer/footer-section";

const FullPage = () => {
  return (
    <div className="fullpage">
      <LandingSection />
      <QuoteSection child="Talk is Cheap." child2="Show me the Code." />
      <ProjectSection />
      <QuoteSection child="Code is Poetry" child2="Code is art." />
      <AboutSection />
      <QuoteSection child="Stay Positive." child2="Work Hard." />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default FullPage;
