import { signOut } from "firebase/auth";
import React from "react";
import { useAuthContext } from "../context/authContext";
import { auth } from "../firebase";
import avatarDefault from "../assets/images/avatarDefault.jpg";

function Navbar() {
  const { currentUser } = useAuthContext();
  return (
    <div className="navbar">
      <div className="logo">LKC Chat</div>
      <div className="user">
        <img
          src={currentUser.photoURL || avatarDefault}
          alt=""
          onError={(e) => (e.target.src = avatarDefault)}
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
