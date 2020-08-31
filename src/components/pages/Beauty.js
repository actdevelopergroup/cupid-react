import React from "react";
import PhotoList from "./PhotoList";

const Beauty = ({ photos }) => {
  return (
    <main className="main">
      <div className="row">
        {photos &&
          photos.map((photo) => {
            return <PhotoList photo={photo} key={photo.id} />;
          })}
      </div>
    </main>
  );
};

export default Beauty;
