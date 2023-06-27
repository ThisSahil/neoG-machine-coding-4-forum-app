export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
