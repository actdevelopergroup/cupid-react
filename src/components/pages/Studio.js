import React from "react";
import useFirestore from "../../hooks/useFirestore";
import PhotoList from "./PhotoList";

const Studio = () => {
  const { photos } = useFirestore("studio");
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

export default Studio;
