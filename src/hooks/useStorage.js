import { useState, useEffect } from "react";
import firebase from "../firebase/config";
import "firebase/storage";
import "firebase/firestore";

const useStorage = (data) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(null);

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  useEffect(() => {
    // references
    const storageRef = firebase.storage().ref(data.file.name);
    const collectionRef = firebase.firestore().collection("photos");

    storageRef.put(data.file).on(
      "state_changed",
      (snap) => {
        const isUploading = true;
        setIsUploading(isUploading);
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const category = data.category;
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({
          category: category,
          url: url,
          createdAt,
        });
        const isUploading = false;
        setIsUploading(isUploading);
        setUrl(url);
      }
    );
  }, [data]);

  return { progress, url, error, isUploading };
};

export default useStorage;
