import classNames from "classnames";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, actionBar, className }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const classes = classNames(
    className,
    "fixed inset-y-40 inset-x-100 p-10 bg-white min-w-80 min-h-80"
  );

  return ReactDOM.createPortal(
    <div className="flex justify-center items-center">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-30"
      ></div>
      <div className={classes}>
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
