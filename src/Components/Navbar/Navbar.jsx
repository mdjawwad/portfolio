import React from "react";
import Toggle from "../toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll/modules";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          Ja<span>WW</span>ad
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              className="links"
              spy={true}
              to="home"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link className="links" spy={true} to="services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link className="links" spy={true} to="experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link className="links" spy={true} to="portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link className="links" spy={true} to="testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link className="links" spy={true} to="contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
