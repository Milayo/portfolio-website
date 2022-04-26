import React from "react";
import { Link } from "react-scroll";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Tomilayo Ijarotimi</h1>
      <div className="header__menu">
        <Link to="work" spy={true} smooth={true} duration={500} className="header__title header__menu-tab">Work</Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="header__title header__menu-tab">About</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="header__title header__menu-tab">Contact</Link>
        <Link to="" spy={true} smooth={true} duration={500} className="header__title header__menu-tab">Resume</Link>
      </div>
    </div>
  );
};

export default Header;
