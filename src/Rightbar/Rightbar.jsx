import React, { useEffect, useState } from "react";
import "./Rightbar.css";
import { forumData } from "../api";
import { PostState } from "../context/Context";

const Rightbar = () => {
  const { postState, postDispatch } = PostState();
  const data = postState.posts;

  let currentTime = new Date();

  const handleLatestClick = () => {
    console.log("hello");
    const updated = data.sort((a, b) => {
      let givenATime = new Date(a.createdAt);
      let givenBTime = new Date(b.createdAt);
      let AtimeDifference = currentTime - givenATime;
      let BtimeDifference = currentTime - givenBTime;
      let AminutesAgo = Math.floor(AtimeDifference / (1000 * 60));
      let BminutesAgo = Math.floor(BtimeDifference / (1000 * 60));

      return AminutesAgo - BminutesAgo;
    });

    postDispatch({ type: "FETCH_POSTS", payload: updated });
  };

  const handleMostUpvote = () => {
    const updated = data.sort((a, b) => b.upvotes - a.upvotes);

    console.log(updated);

    postDispatch({ type: "FETCH_POSTS", payload: updated });
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <h1>Sort By</h1>
        {/* <select
          name="sort"
          className="dropdown"
          id="sort"
          onChange={(event) => handleClick(event.target.value)}
        >
          <option value="latest">Latest Posts</option>
          <option value="upvote">Most Upvote</option>
        </select> */}

        <div className="latest" onClick={handleLatestClick}>
          Latest Posts
        </div>
        <div className="upvotes" onClick={handleMostUpvote}>
          Most Upvote
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
