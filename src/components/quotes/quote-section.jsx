import React from "react";
import "./quote-section.scss";
import {ReactComponent as Blob} from "../../images/quoteblob.svg";

const QuoteSection = ({ child, child2 }) => {
  return (
    <div
      className="quotes-container"
      data-aos="zoom-in-up"
      data-aos-easing="ease-out"
      data-aos-duration="1500"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="quote-wrapper">
        <Blob className="blob" />
        <p className="quotes-content">{child}</p>
      </div>
    </div>
  );
};

export default QuoteSection;
