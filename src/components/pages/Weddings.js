import React from "react";
import useFirestore from "../../hooks/useFirestore";
import PhotoList from "./PhotoList";

const Weddings = () => {
  const { photos } = useFirestore("wedding");

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

export default Weddings;
