import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export const DashLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="overflow-y-auto bg-[#F5F5F5]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
