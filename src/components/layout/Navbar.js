import React from "react";
import NavLinks from "./navigations/NavLinks";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "./Modal";
import Upload from "../pages/Upload";
import UploadLink from "./navigations/UploadLink";

const Navbar = (props) => {
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  const upload = props.auth.uid ? <UploadLink openModal={openModal} /> : "";

  return (
    <React.Fragment>
      <header>
        <div className="header">
          <div className="brand_logo">
            <Link to="/">
              <img src="./assets/img/brand/new.png" alt="cupidshotit logo" />
            </Link>
          </div>
        </div>
        <NavLinks auth={props.auth} />
        {upload}
      </header>
      <Modal ref={modalRef}>
        <Upload />
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navbar);
