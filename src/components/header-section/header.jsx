import React from "react";
import { Link } from "react-scroll";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Tomilayo Ijarotimi</h1>
      <div className="header__menu">
        <Link
          to="work"
          spy={true}
          smooth={true}
          duration={500}
          className="header__title header__menu-tab"
        >
          Work
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="header__title header__menu-tab"
        >
          About
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="header__title header__menu-tab"
        >
          Contact
        </Link>
        <Link
          to=""
          spy={true}
          smooth={true}
          duration={500}
          className="header__title header__menu-tab"
        >
          Resume
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="43"
        height="43"
        className="hamburger"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    </div>
  );
};

export default Header;
