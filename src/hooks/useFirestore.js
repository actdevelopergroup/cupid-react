import { useState, useEffect } from "react";
import firebase from "../firebase/config";

const useFirestore = (category) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const collectionRef = firebase
    .firestore()
    .collection("photos")
    .orderBy("createdAt", "desc")
    .where(`category`, "==", `${category}`);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    collectionRef
      .get()
      .then(function (querySnapshot) {
        const images = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          images.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPhotos(images);
        setHasMore(images.length > 0);
        setIsLoading(false);
      })
      .catch(function (error) {
        // console.log("Error getting documents: ", error);
        setError("Error getting documents: ");
      });
  }, [category]);

  return { photos, isLoading, error, hasMore };
};

export default useFirestore;

/*

useEffect(() => {
    setIsLoading(true);
    setError(false);
    collectionRef
      .orderBy("createdAt", "desc")
      .where(`category`, "==", `${category}`)
      .onSnapshot((querySnapshot) => {
        const images = [];
        querySnapshot.forEach((doc) => {
          images.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPhotos(images);
        setHasMore(images.length > 0);
        setIsLoading(false);
      });
  }, [category, collectionRef]);

  return { photos, isLoading, error, hasMore };
*/
