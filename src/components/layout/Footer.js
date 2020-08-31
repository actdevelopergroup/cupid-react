import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <Link to="/" title="follow me on facebook">
            <i className="bx bxl-facebook"></i>
          </Link>
        </li>
        <li>
          <Link to="/" title="follow me on twitter">
            <i className="bx bxl-twitter"></i>
          </Link>
        </li>
        <li>
          <Link to="/" title="follow me on instagram">
            <i className="bx bxl-instagram"></i>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
