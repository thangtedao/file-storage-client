import classNames from "classnames";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import {
  GoPlus,
  GoHome,
  GoFile,
  GoClock,
  GoTrash,
  GoCloud,
} from "react-icons/go";
import ProgressBar from "./ProgressBar";

const SideBar = ({ className }) => {
  const fileInputRef = useRef(null);

  const links = [
    { label: "Dashboard", path: "/", icon: <GoHome /> },
    { label: "Files", path: "/files", icon: <GoFile /> },
    { label: "Recent", path: "/recent", icon: <GoClock /> },
    { label: "Trash", path: "/trash", icon: <GoTrash /> },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-lg font-medium text-blue-600 flex items-center gap-2"
            : "text-lg flex items-center gap-2"
        }
        key={link.label}
        to={link.path}
      >
        {link.icon} {link.label}
      </NavLink>
    );
  });

  const menuOptions = [
    {
      label: (
        <div className="flex items-center gap-2">
          <GoFile /> Upload file
        </div>
      ),
      onClick: () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      },
    },
  ];

  const menuLabel = (
    <div className="flex justify-center items-center gap-1">
      <GoPlus className="text-xl" />
      <span>New</span>
    </div>
  );

  const classes = classNames(
    "flex flex-col bg-white py-3 px-6 h-screen overflow-y-auto",
    className
  );

  return (
    <div className={classes}>
      <div className="h-15 border-b border-gray-200 text-4xl text-center">
        CLOUD BOX
      </div>

      <Menu options={menuOptions} label={menuLabel} />
      <input ref={fileInputRef} type="file" hidden />

      <div className="flex flex-col gap-5 my-8">{renderedLinks}</div>

      <div className="flex flex-col gap-2 mt-5 border-t border-gray-200">
        <div className="flex items-center gap-2 font-medium text-2xl py-3">
          <GoCloud className="text-2xl" /> Storage
        </div>
        <ProgressBar progress={70} color="#0066ff" />
        <div>17 / 20 GB Used</div>
      </div>
    </div>
  );
};

export default SideBar;
