import React from "react";
import SVGInline from "react-svg-inline";
import MagnifyingGlass from "./magnifier.svg";

interface SearchFilterProps {
  records: Array<{}>;
  setFilteredRecords: React.Dispatch<React.SetStateAction<{}>>;
}

function SearchFilter({ records, setFilteredRecords }: SearchFilterProps) {
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
