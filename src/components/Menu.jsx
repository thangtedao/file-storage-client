import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";

function Menu({ options, label }) {
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

  const handleOptionClick = (option) => {
    setIsOpen(false);
    option.onClick();
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-gray-200 flex justify-center items-center h-full w-full cursor-pointer py-2"
        onClick={() => handleOptionClick(option)}
        key={option.label}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-center items-center shadow cursor-pointer rounded-lg border-gray-200 py-3 mt-8 hover:bg-gray-100"
        onClick={handleClick}
      >
        {label || "Menu"}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full mt-3 border-none shadow">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Menu;
