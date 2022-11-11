import React from "react";
import CamImg from "../assets/images/cam.png";
import MoreImg from "../assets/images/more.png";
import AddImg from "../assets/images/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { useChatContext } from "../context/chatContext";

function Chat() {
  const { data } = useChatContext();

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img src={CamImg} alt="" />
          <img src={AddImg} alt="" />
          <img src={MoreImg} alt="" />
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
