import React from "react";
import SearchFilter from "../search-filter/search-filter";

interface HeaderProps {
  title: string;
  records: Array<{}>;
  setFilteredRecords: React.Dispatch<React.SetStateAction<{}>>;
}

function Header({ title, records, setFilteredRecords }: HeaderProps) {
  return (
    <div className="header-area">
      <h2>{title}</h2>
      <SearchFilter
        records={records}
        setFilteredRecords={setFilteredRecords}
      ></SearchFilter>
    </div>
  );
}

export default Header;
