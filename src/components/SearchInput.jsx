import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="w-[35%] flex justify-between items-center gap-3 px-3 py-2 rounded-lg border border-gray-300">
      <CiSearch className="text-2xl" />
      <input className="focus:outline-none w-full" type="text" />
    </div>
  );
};

export default SearchInput;
