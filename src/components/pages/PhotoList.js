import React from "react";
import { motion } from "framer-motion";
import PreloadImage from "react-preload-image";

const PhotoList = ({ photo }) => {
  return (
    <div className="col four no-gutters">
      <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
        <PreloadImage
          className="img-container"
          src={photo.url}
          alt={photo.category}
          lazy
        />
      </motion.div>
    </div>
  );
};
export default PhotoList;
