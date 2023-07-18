import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-neutral text-neutral-content ">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">InstantChat</a>
        {/* <button onClick={handleLogout} className="btn btn-outline">Logout</button> */}
        {currentUser ? <button onClick={handleLogout} className="btn btn-outline">Logout</button> : ''}
      </div>
    </div>
  );
};

export default Navbar;
