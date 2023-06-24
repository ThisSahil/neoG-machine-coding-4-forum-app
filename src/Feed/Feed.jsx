import React, { useState } from "react";
import "./Feed.css";
import { forumData } from "../api";
import Post from "../Post/Post";

const Feed = ({ state }) => {
  // const [data, setData] = useState(forumData.posts);
  const { data, setData } = state;

  // console.log(data.posts);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <h1>Latest Posts</h1>
        {data.map((post) => (
          <Post post={post} state={{ data, setData }} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
