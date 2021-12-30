import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import db from "../firebase";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
const Sidebar = () => {
  const sidebaroptions = [
    { icon: InsertComment, title: "Threads" },
    { icon: Inbox, title: "Mentions & reactions" },
    { icon: Drafts, title: "Saved items" },
    { icon: BookmarkBorder, title: "Channel browser" },
    { icon: PeopleAlt, title: "People & user groups" },
    { icon: Apps, title: "Apps" },
    { icon: FileCopy, title: "File browser" },
    { icon: ExpandLess, title: "Show less" },
  ];

  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("items").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h1 className="sidebar__username">MJ9601</h1>
          <h3 className="sidebar__status">
            <div className="sidebar__statusIcon"></div>
            <span className="sidebar__name">mj</span>
          </h3>
        </div>
        <div className="sidebar__create">
          <Create className="sidebar__createIcon" />
        </div>
      </div>
      <hr />

      {sidebaroptions.map((option, index) => (
        <SidebarOption key={index} Icon={option.icon} title={option.title} />
      ))}
      <hr />
      <SidebarOption Icon={ExpandMore} title={"Channels"} />
      <div className="sidebar__channel_wrapper">
        {channels.map((channel) => (
          <SidebarOption
            key={channel.id}
            id={channel.id}
            title={channel.name}
          />
        ))}
      </div>
      <div className="sidebar__create_channel">
        <SidebarOption Icon={Add} title={"Create channel"} addChannelOption />
      </div>
    </div>
  );
};

export default Sidebar;
