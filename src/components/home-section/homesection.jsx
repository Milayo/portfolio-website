import React from "react";
import "./homesection.scss";

const HomeSection = () => {
  return (
    <div className="homesection">
      <div>
        <h1>
          <span className="homesection-text0">let</span> {"person = { "}
        </h1>
       
        <h2>
          firstName:{" "}
          <span data-text="'Tomilayo'," className="homesection-text1">
            'Tomilayo',
          </span>
        </h2>

        <h2>
          lastName:{" "}
          <span data-text="'Ijarotimi'," className="homesection-text2">
            'Ijarotimi',
          </span>
        </h2>
        <h2>
          work:{" "}
          <span data-text="'WebsiteDeveloper'" className="homesection-text3">
            'WebsiteDeveloper'
          </span>
        </h2>
        <h2>{"};"}</h2>
      </div>
    </div>
  );
};

export default HomeSection;
