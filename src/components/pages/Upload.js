import React, { useState } from "react";
import imageCompression from "browser-image-compression";

import { isEmpty } from "react-redux-firebase";
import ProgressBar from "./progressBar";

const Upload = (props) => {
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const types = ["image/png", "image/jpg", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      if (typeof selected != "undefined") {
        var size = parseFloat(selected.size / (1024 * 1024)).toFixed(2);
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1500,
          useWebWorker: true,
        };
        if (size > 1) {
          imageCompression(selected, options)
            .then(function (compressedFile) {
              setFile(compressedFile);
              setError("");
            })
            .catch(function (error) {
              console.log(error.message);
            });
        } else {
          setFile(selected);
          setError("");
        }
      } else {
        setError("This browser does not support HTML5.");
      }
    } else {
      setFile(null);
      setError("Please select a valid image file (png, jpg or jpeg)");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (isEmpty(category)) {
      setError("category or file cannot be empty");
      return;
    }
    const data = {
      category: category,
      file: file,
    };
    setData(data);
    setCategory("");
    setFile("");
  };
  return (
    <form onSubmit={submitForm}>
      <h4 style={{ fontSize: "1.5rem" }}>Make an upload</h4>
      <div className="mtb-2">
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          name="category"
          placeholder="Enter photo category"
          className="form-input"
          value={category}
        />
      </div>
      <div className="mtb-4">
        <input
          onChange={changeHandler}
          type="file"
          name="file"
          id="file"
          className="input-file"
          data-multiple-caption="{count} files selected"
          multiple
        />
        <label htmlFor="file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
          </svg>
          <span>Choose a file&hellip;</span>
        </label>
      </div>
      <div className="error-section">
        {error && <p className="error-text">{error}</p>}
        {data && <ProgressBar data={data} setData={setData} />}
      </div>

      <div className="mtb-2">
        <input
          type="submit"
          value="Upload"
          style={{ width: "100%", height: "40px" }}
          className="button button-primary"
        />
      </div>
    </form>
  );
};

export default Upload;
