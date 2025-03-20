import classNames from "classnames";
import React from "react";
import SearchInput from "./SearchInput";
import UserAvatar from "./UserAvatar";

const NavBar = ({ className }) => {
  const classes = classNames(
    className,
    "flex justify-between mb-6 px-8 py-4 bg-white"
  );

  const menuOptions = [
    {
      label: <div className="flex items-center gap-2">Upload file</div>,
      onClick: () => {
        console.log("hello");
      },
    },
  ];

  return (
    <div className={classes}>
      <SearchInput />
      <div>
        <UserAvatar name="Thang" options={menuOptions} />
      </div>
    </div>
  );
};

export default NavBar;
