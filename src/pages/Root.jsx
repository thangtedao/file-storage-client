import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div className="flex w-full bg-gray-100 min-h-screen">
      <SideBar className="w-[16%] fixed top-0 left-0" />
      <div className="ml-[16%] w-[84%] flex flex-col">
        <NavBar className="fixed h-18 w-[84%] left-[16%]" />
        <div className="px-8 mt-23">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
