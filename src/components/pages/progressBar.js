import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";

const ProgressBar = ({ data, setData }) => {
  const { progress, url } = useStorage(data);

  useEffect(() => {
    if (url) {
      setData(null);
    }
  }, [url, setData]);
  if (progress === 100) return <Redirect to="/" />;
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
