import React from "react";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";
import { connect } from "react-redux";
const DesktopNav = (props) => {
  const logout = props.auth.uid ? (
    <li className="nav-item">
      <Link to="" onClick={props.signOut} className="nav-link">
        Log out
      </Link>
    </li>
  ) : (
    ""
  );
  return (
    <div className="d-desktop">
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
          <NavLink to="/service" className="nav-link">
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
        {logout}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(DesktopNav);
