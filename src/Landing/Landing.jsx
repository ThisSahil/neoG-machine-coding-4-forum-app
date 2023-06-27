import React, { useState } from "react";
import "./Landing.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Feed from "../Feed/Feed";
import Rightbar from "../Rightbar/Rightbar";
import { forumData } from "../api";

const Landing = () => {
  // const [data, setData] = useState(forumData.posts);
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Landing;
