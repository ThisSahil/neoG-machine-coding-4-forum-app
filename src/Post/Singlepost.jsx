import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Singlepost.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { forumData } from "../api";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { PostState } from "../context/Context";

const Singlepost = () => {
  const { postState, postDispatch } = PostState();
  const data = postState.posts;
  const { id } = useParams();

  const post = data.find((post) => post.postId === id);

  let currentTime = new Date();
  let givenTime = new Date(post.createdAt);
  let timeDifference = currentTime - givenTime;
  let minutesAgo = Math.floor(timeDifference / (1000 * 60));

  const handleBookMarkClick = (id) => {
    // console.log(data.posts);
    const updated = data.map((pos) => {
      // console.log("hello");

      if (pos.postId === id) {
        pos.isBookmarked = !pos.isBookmarked;
      }
      return { ...pos };
    });

    postDispatch({ type: "FETCH_POSTS", payload: updated });
  };

  const handleUpvoteClick = (id) => {
    const updated = data.map((pos) => {
      // console.log("hello");

      if (pos.postId === id) {
        pos.upvotes = pos.upvotes + 1;
      }
      return { ...pos };
    });

    postDispatch({ type: "FETCH_POSTS", payload: updated });
  };

  const handleDownvoteClick = (id) => {
    const updated = data.map((pos) => {
      // console.log("hello");

      if (pos.postId === id) {
        pos.downvotes = pos.downvotes + 1;
      }
      return { ...pos };
    });

    // console.log(updated);

    postDispatch({ type: "FETCH_POSTS", payload: updated });
  };

  return (
    <div>
      <Link style={{ textAlign: "center", fontWeight: "bold" }} to="/">
        Posts
      </Link>
      <div className="post">
        <div className="vote-buttons">
          <ArrowCircleUpOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleUpvoteClick(post.postId)}
            fontSize="large"
          />
          <h2 className="vote-count">{post.upvotes - post.downvotes}</h2>
          <ArrowCircleDownOutlinedIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleDownvoteClick(post.postId)}
            fontSize="large"
          />
        </div>

        <div className="postWrapper">
          <div className="postTop">
            <img src={post.picUrl} alt="" className="postProfileImg" />

            <span className="postUsername">
              Posted By{" "}
              <span
                style={{
                  color: "#0891b2",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                {post.username}
              </span>
            </span>
            <span className="postDate">{minutesAgo} mins ago</span>
          </div>
          <div className="postCenter">
            <h1>{post.post}</h1>
            <div className="tags">
              {post.tags.map((tag) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
            <p className="desc">{post.postDescription}</p>
            <hr />
          </div>
          <div className="postBottom">
            <div className="icons">
              <ModeCommentOutlinedIcon
                style={{ cursor: "pointer" }}
                fontSize="medium"
              />
              <ShareOutlinedIcon
                style={{ cursor: "pointer" }}
                fontSize="medium"
              />

              {!post.isBookmarked ? (
                <BookmarkBorderOutlinedIcon
                  onClick={() => handleBookMarkClick(post.postId)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <BookmarkIcon
                  onClick={() => handleBookMarkClick(post.postId)}
                  style={{ cursor: "pointer", color: "#c026d3" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="comment-wrapper">
        <div className="comments">
          {post.comments.map((comment) => (
            <div>
              <div className="postTop">
                <img src={comment.picUrl} alt="" className="postProfileImg" />
                <span
                  style={{
                    color: "#0891b2",
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                >
                  {comment.username}
                </span>

                <span className="postUsername">
                  Replying To{" "}
                  <span
                    style={{
                      color: "#0891b2",
                      fontWeight: "bold",
                      fontSize: "large",
                    }}
                  >
                    {post.username}
                  </span>
                </span>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
          <div className="icons">
            <FavoriteBorderOutlinedIcon
              style={{ cursor: "pointer" }}
              fontSize="medium"
            />
            <ModeCommentOutlinedIcon
              style={{ cursor: "pointer" }}
              fontSize="medium"
            />
            <ShareOutlinedIcon
              style={{ cursor: "pointer" }}
              fontSize="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepost;
