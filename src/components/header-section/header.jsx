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
        <a
          href="https://docs.google.com/document/d/1jm84AAhzN0xR3CudbnIPdN2cFJUDPD-giMEvZCpcFJw/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="header__title header__menu-tab"
        >
          Resume
        </a>
      </div>
      <div className="menu">
        <input
          type="checkbox"
          className="menu_checkbox"
          id="menu_checkbox"
        ></input>
        <label for="menu_checkbox" className="menu_label">
          <div className="menu_text_bar"></div>
        </label>

        <nav className="menu_nav-items">
          <ul className="menu_nav-items-list">
            <li>
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={500}
                className="header__menu-tab"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="header__menu-tab"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="header__menu-tab"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1jm84AAhzN0xR3CudbnIPdN2cFJUDPD-giMEvZCpcFJw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="header__menu-tab"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
