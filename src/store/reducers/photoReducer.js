const initState = {
  photos: [
    { id: "1", image: "./assets/img/model/DSC01552.jpg" },
    { id: "2", image: "./assets/img/model/DSC02147.jpg" },
    { id: "3", image: "./assets/img/model/Candice-Xaire-Beauty1808.jpg" },
    { id: "4", image: "./assets/img/model/gallery-10.jpg" },
  ],
};

const photoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PHOTO":
      console.log("create photo success", action.photo);
      break;
    default:
      return state;
  }
  return state;
};

export default photoReducer;
