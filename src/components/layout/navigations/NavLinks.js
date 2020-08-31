import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavLink = (props) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="site-nav">
      <div className="menu d-mobile">
        <span onClick={openMenu} className="menu-trigger">
          Menu
        </span>
      </div>
      {open && <MobileNav closeMenu={closeMenu} />}
      <DesktopNav auth={props.auth} />
    </div>
  );
};

export default NavLink;
