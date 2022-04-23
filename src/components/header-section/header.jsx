import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Tomilayo Ijarotimi</h1>
      <div className="header__menu">
        <h1 className="header__title header__menu-tab">Work</h1>
        <h1 className="header__title header__menu-tab">About</h1>
        <h1 className="header__title header__menu-tab">Contact</h1>
        <h1 className="header__title header__menu-tab">Resume</h1>
      </div>
    </div>
  );
};

export default Header;
