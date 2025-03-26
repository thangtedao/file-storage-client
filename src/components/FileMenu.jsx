import { useState, useEffect, useRef } from "react";

function FileMenu({ options, children, data }) {
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
    option.onClick(data);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div
        className="hover:bg-gray-200 flex items-center h-full cursor-pointer px-4 py-2"
        onClick={() => handleOptionClick(option)}
        key={index}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl}>
      <div className="relative w-3">
        {isOpen && (
          <div className="absolute right-10 border border-gray-300 rounded-lg overflow-hidden shadow bg-white">
            {renderedOptions}
          </div>
        )}
      </div>
      <div onClick={handleClick}>{children}</div>
    </div>
  );
}

export default FileMenu;
