import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/authContext";
import { db } from "../firebase";
import avatarDefault from "../assets/images/avatarDefault.jpg";
import { useChatContext } from "../context/chatContext";
function Chats() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useAuthContext();
  const { dispatch } = useChatContext();

  //   console.log(Object.entries(chats));
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo.photoURL || avatarDefault}
              alt=""
              onError={(e) => (e.target.src = avatarDefault)}
            />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Chats;
