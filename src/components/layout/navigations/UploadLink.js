import React from "react";

const uploadLink = (props) => {
  return (
    <div className="upload">
      <button onClick={props.openModal} className="circle">
        <i className="bx bx-plus"></i>
      </button>
    </div>
  );
};
export default uploadLink;
