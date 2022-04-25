import React from 'react';
import "./quote-section.scss";

const QuoteSection = () => {
  return (
    <div className="quotes-container">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"> 
        <path
          fill="#FF5277"
          d="M41.9,-67.8C53.8,-65.7,62.6,-53.5,64,-40.5C65.4,-27.5,59.5,-13.7,59.3,-0.1C59,13.5,64.5,26.9,63.2,40.1C61.9,53.3,53.8,66.3,42.1,70.9C30.5,75.5,15.2,71.8,3,66.6C-9.2,61.3,-18.4,54.5,-31.4,50.7C-44.5,46.9,-61.4,46,-69.6,38.1C-77.7,30.1,-77.2,15.1,-73.2,2.3C-69.3,-10.5,-61.9,-21,-56.3,-33.4C-50.7,-45.8,-46.9,-60.2,-37.8,-63.9C-28.7,-67.6,-14.4,-60.7,0.3,-61.2C15,-61.8,30,-69.9,41.9,-67.8Z"
          transform="translate(250 100)"
        />
        <text x="210" y="85" fill="white">
          "Talk is cheap.
        </text>
        <text x="195" y="115" fill="white">
          Show me Code."
        </text>
      </svg>
    </div>
  );
}

export default QuoteSection;