import React from "react";
import WorkPhotos from "./WorkPhotos";

const Contact = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="row mt-3 justify-content-center">
          <div className="col four contact-info">
            <div className="info-item">
              <i className="bx bx-home"></i>
              <h6>Delta State, Nigeria</h6>
              <p>Fupre campus</p>
            </div>
            <div className="info-item">
              <i className="bx bx-phone-call"></i>
              <h6>09039393939</h6>
              <p>Available on schedule</p>
            </div>
            <div className="info-item">
              <i className="bx bx-envelope"></i>
              <h6>cupidshotit@gmail.com</h6>
              <p>Inbox me anytime</p>
            </div>
          </div>
          <div className="col two contact-message">
            <form action="">
              <div className="mb-3">
                <input
                  type="text"
                  name=""
                  placeholder="Enter your name"
                  className="form-input"
                />
              </div>
              <div className="mtb-3">
                <input
                  type="email"
                  name=""
                  placeholder="Enter your email address"
                  className="form-input"
                />
              </div>
              <div className="mtb-3">
                <input
                  type="text"
                  name=""
                  placeholder="Enter your Subject"
                  className="form-input"
                />
              </div>
              <div className="mtb-3">
                <textarea
                  className="form-input"
                  name="message"
                  id="message"
                  rows="1"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="mtb-3">
                <input
                  type="submit"
                  value="Send message"
                  className="button button-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <WorkPhotos />
    </main>
  );
};
export default Contact;
