import React, { useState } from "react";
import "./Feed.css";
import { forumData } from "../api";
import Post from "../Post/Post";
import { PostState } from "../context/Context";

const Feed = ({ state }) => {
  // const [data, setData] = useState(forumData.posts);
  // const { data, setData } = state;

  const { postState, postDispatch } = PostState();

  console.log(postState.posts);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <h1>Latest Posts</h1>
        {postState.posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
