import { connect } from "react-redux";

export const createPhoto = (photo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "CREATE_PHOTO", photo });
    console.log("actions", photo.file);
  };
};
