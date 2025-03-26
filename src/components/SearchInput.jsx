import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();

  const [seachTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    navigate(`/search/${seachTerm}`);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${seachTerm}`);
    }
  };
  return (
    <div className="w-[35%] flex justify-between items-center gap-3 px-3 py-2 rounded-lg border border-gray-300">
      <CiSearch className="text-2xl cursor-pointer" onClick={handleSearch} />
      <input
        className="focus:outline-none w-full"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
