import React from "react";
import SVGInline from "react-svg-inline";
import MagnifyingGlass from "./magnifier.svg";

function SearchFilter() {
  return (
    <div className="search-filter">
      <input type="text" placeholder="Find item by name" />
      <div className="search-icon">
        <SVGInline height="16px" width="16px" svg={MagnifyingGlass} />
      </div>
    </div>
  );
}

export default SearchFilter;
