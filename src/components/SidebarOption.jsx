import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "../firebase";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const navigate = useNavigate();
  const selectChannel = () => (id ? navigate(`/chat/${id}`) : navigate(title));
  const addChannel = () => {
    const channelName = prompt("Please enter the channel's name ");
    ChannelMergerNode && db.collection("items").add({ name: channelName });
  };
  return (
    <div
      className="sidebaroption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon ? (
        <>
          <Icon className="sidebarOption__icon" /> <span>{title}</span>
        </>
      ) : (
        <span> # {title}</span>
      )}
    </div>
  );
};

export default SidebarOption;
