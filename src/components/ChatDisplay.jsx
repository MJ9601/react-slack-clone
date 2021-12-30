import { InfoRounded, StarBorderOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import "./ChatDisplay.css";
import Message from "./Message";

const ChatDisplay = () => {
  const { chatId } = useParams();
  const [chatroom, setChatroom] = useState(null);
  const [chatmessages, setChatmessages] = useState([]);
  useEffect(() => {
    chatId &&
      db
        .collection("items")
        .doc(chatId)
        .onSnapshot((snapshot) => setChatroom(snapshot.data()));
    chatId &&
      db
        .collection("items")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setChatmessages(snapshot.docs.map((doc) => doc.data()))
        );
  }, [chatId]);
  console.log(chatmessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header_left">
          <span>#{chatroom?.name}</span>
          <StarBorderOutlined className="chat__star_icon" />
        </div>
        <div className="chat__header_right">
          <InfoRounded className="chat__info_icon" />
          <span>Details</span>
        </div>
      </div>
      <div className="chat__body">
        {chatmessages.map(({ message, user, userimage, timestamp }, index) => (
          <Message
            key={index}
            message={message}
            user={user}
            userimage={userimage}
            timestamp={timestamp?.toDate()}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatDisplay;
