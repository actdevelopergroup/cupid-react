import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = (props) => {
  return (
    <div className="menu-nav animated slideInRight">
      <div className="close-btn">
        <span onClick={props.closeMenu} className="bx bx-x"></span>
      </div>
      <ul className="site-nav-items">
        <li className="nav-item">
          <NavLink to="/beauty" className="nav-link">
            Beauty
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/studio" className="nav-link">
            Studio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/weddings" className="nav-link">
            Weddings
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/editorial" className="nav-link">
            Editorial
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/bw" className="nav-link">
            B&W
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MobileNav;
