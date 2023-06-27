import React, { createContext, useContext, useEffect, useReducer } from "react";
import { forumData } from "../api";
import { postReducer } from "./Reducer";

const PostsContext = createContext();

const Context = ({ children }) => {
  const [postState, postDispatch] = useReducer(postReducer, {
    posts: [],
  });

  const fetchPosts = () => {
    setTimeout(() => {
      postDispatch({ type: "FETCH_POSTS", payload: forumData.posts });
    }, 1000);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ postState, postDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export default Context;

export const PostState = () => {
  return useContext(PostsContext);
};
