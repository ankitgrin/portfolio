import React from "react";
import Toogle from "../toogle/Toogle";
import "./Navbar.css";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name" onClick={() => window.location.reload()}>
          Ankit Grin
        </div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            {/* <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link> */}
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Projects</li>
            </Link>
            {/* <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link> */}
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
