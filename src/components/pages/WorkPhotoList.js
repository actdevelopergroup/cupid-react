import React from "react";

const WorkPhotoList = ({ photo }) => {
  return (
    <div
      className="work-entry small"
      style={{ backgroundImage: `url(${photo.image})` }}
    ></div>
  );
};

export default WorkPhotoList;
