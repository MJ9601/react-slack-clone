import React from "react";
import "./Message.css";

const Message = ({ message, user, userimage, timestamp }) => {
  return (
    <div className="message">
      <img src={userimage} alt="" className="message__img" />
      <div className="message__userInfo">
        <p className="message__text">{message}</p>
        <h3>
          {user} <span>{new Date(timestamp).toUTCString()}</span>
        </h3>
        {/* <h3>{timestamp}</h3> */}
      </div>
    </div>
  );
};

export default Message;
