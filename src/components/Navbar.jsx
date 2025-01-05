import React from "react";
import NotificationIcon from "../components/Notif";
import ProfileMenu from "./ProfileMenu";

function Navbar() {
  return (
    <nav className="p-3 rounded">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-white text-2xl font-semibold"></div>
          <ul className="flex space-x-4 items-center">
            <li className="text-white">
              <NotificationIcon />
            </li>
            <li className="text-white">
              <ProfileMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
