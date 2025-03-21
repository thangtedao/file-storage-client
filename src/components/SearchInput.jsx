import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[35%] flex justify-between items-center gap-3 px-3 py-2 rounded-lg border border-gray-300">
      <CiSearch className="text-2xl" onClick={() => navigate("/search")} />
      <input className="focus:outline-none w-full" type="text" />
    </div>
  );
};

export default SearchInput;
