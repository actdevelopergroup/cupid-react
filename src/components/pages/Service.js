import React from "react";
import WorkPhotos from "./WorkPhotos";

const Service = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="row mt-3 justify-content-center">
          <div className="col three text-center plr-0">
            <div className="card">
              <span className="icon">
                <i className="bx bx-camera"></i>
              </span>
              <div className="desc">
                <h3>Photography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  doloremque impedit quis commodi ratione asperiores?
                </p>
              </div>
            </div>
          </div>
          <div className="col three text-center plr-0">
            <div className="card">
              <span className="icon">
                <i className="bx bx-image"></i>
              </span>
              <div className="desc">
                <h3>Image processing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  doloremque impedit quis commodi ratione asperiores?
                </p>
              </div>
            </div>
          </div>
          <div className="col three text-center plr-0">
            <div className="card">
              <span className="icon">
                <i className="bx bx-video-recording"></i>
              </span>
              <div className="desc">
                <h3>Videography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  doloremque impedit quis commodi ratione asperiores?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkPhotos />
    </main>
  );
};

export default Service;
