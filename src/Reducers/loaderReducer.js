const loaderReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_LOADER": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default loaderReducer;
