import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { logout } from "../services/authService";
import { useRootContext } from "../pages/Root";

const UserAvatar = () => {
  const { user } = useRootContext();

  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div
        ref={divEl}
        onClick={handleClick}
        className="w-10 h-10 bg-gray-300 text-white flex items-center justify-center rounded-full text-lg font-bold cursor-pointer"
      >
        {user?.username.charAt(0).toUpperCase()}
      </div>
      {isOpen && (
        <div className="absolute mt-3 right-0 border border-gray-200 rounded-lg shadow w-80 bg-white p-5 flex flex-col items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 text-white flex items-center justify-center rounded-full text-lg font-bold">
            {user?.username.charAt(0).toUpperCase()}
          </div>
          <div className="text-xl font-medium">{user?.username}</div>
          <div>{user?.email}</div>
          <Button
            primary
            rounded
            onClick={handleSignOut}
            className="w-30 hover:bg-gray-400"
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
