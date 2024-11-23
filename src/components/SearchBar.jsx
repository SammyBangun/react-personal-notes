/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center my-12">
      <input
        type="text"
        className="p-2 w-1/4 rounded bg-gray-800 text-white"
        placeholder="Cari catatan ..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
