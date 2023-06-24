import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeRoundedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>

          <li className="sidebarListItem">
            <ExploreRoundedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>

          <li className="sidebarListItem">
            <BookmarksRoundedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <AccountCircleRoundedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
