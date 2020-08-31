import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => openModal(),
      closeModal: () => closeModal(),
    };
  });

  const openModal = () => {
    setDisplay(true);
  };
  const closeModal = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className="backdrop">
        <div className="mini-wrapper">
          <div className="row justify-content-center relative">
            <div className="col form-section">
              <div className="close">
                <button
                  onClick={closeModal}
                  className="button button-secondary"
                >
                  Close
                </button>
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return null;
});
export default Modal;
