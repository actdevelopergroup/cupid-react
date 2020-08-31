import React from "react";
import WorkPhotos from "./WorkPhotos";

const About = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="row mt-3 justify-content-center">
          <div className="col two">
            <div className="about-image">
              <img
                src="./assets/img/model/insta-2.jpg"
                className="img-responsive"
                alt=""
              />
            </div>
          </div>
          <div className="col two">
            <h3 style={{ fontSize: "30px" }}>About Me</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium ducimus perspiciatis quibusdam ex minus nam cupiditate
              facilis? Ipsam, reiciendis odit error minus sint dignissimos in
              velit labore, praesentium asperiores natus.
            </p>
          </div>
        </div>
      </div>
      <WorkPhotos />
    </main>
  );
};

export default About;
