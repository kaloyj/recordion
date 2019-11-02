import React from "react";

function SearchFilter() {
  return (
    <div className="search-filter">
      <span>filter by</span>
      <select>
        <option>Name</option>
        <option>Date</option>
      </select>
    </div>
  );
}

export default SearchFilter;
