import React from "react";
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner-container">
      {" "}
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="spinner spinner-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
