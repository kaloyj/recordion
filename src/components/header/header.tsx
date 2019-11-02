import React from "react";
import SearchFilter from "../search-filter/search-filter";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="header-area">
      <h2>{title}</h2>
      <SearchFilter></SearchFilter>
    </div>
  );
}

export default Header;
