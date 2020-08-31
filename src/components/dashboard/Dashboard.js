import React from "react";
import useFirestore from "../../hooks/useFirestore";
import Loader from "../layout/Loader";
import Beauty from "../pages/Beauty";
const Dashboard = () => {
  let category = "beauty";
  const { photos, isLoading, hasMore, error } = useFirestore(category);
  // const cacheImages = (srcArray) => {
  //   srcArray.forEach((src) => {
  //     new Promise(function (resolve, reject) {
  //       const img = new Image();
  //       img.src = src;
  //       img.onload = resolve();
  //       img.onerror = reject();
  //     });
  //   });
  // };

  return (
    <main className="main">
      {isLoading ? <Loader /> : <Beauty photos={photos} />}
      {error && <p>Error loading images</p>}
    </main>
  );
};

export default Dashboard;
