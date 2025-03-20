import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const UserAvatar = ({ name }) => {
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

  return (
    <div className="relative">
      <div
        ref={divEl}
        onClick={handleClick}
        className="w-10 h-10 bg-gray-300 text-white flex items-center justify-center rounded-full text-lg font-bold cursor-pointer"
      >
        {name.charAt(0).toUpperCase()}
      </div>
      {isOpen && (
        <div className="absolute mt-3 right-0 border border-gray-200 rounded-lg shadow w-80 bg-white p-5 flex flex-col items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 text-white flex items-center justify-center rounded-full text-lg font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="text-xl font-medium">{name}</div>
          <div>example@gmail.com</div>
          <Button className="w-30 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium">
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
