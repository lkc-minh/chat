import React, { useEffect, useRef } from "react";
import { useAuthContext } from "../context/authContext";
import { useChatContext } from "../context/chatContext";

function Message({ message }) {
  const { currentUser } = useAuthContext();
  const { data } = useChatContext();

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={
        message.senderId === currentUser.uid ? "message owner" : "message"
      }
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        {message.text && <p>{message.text}</p>}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}

export default Message;
