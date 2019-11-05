import React, { useState, useEffect, useContext } from "react";
import SVGInline from "react-svg-inline";
import MagnifyingGlass from "./magnifier.svg";
import { RecordDispatch, RecordContext } from "../../context";
import { useDebounce } from "../../hooks";
import { SET_FILTERED_RECORDS } from "../../context/record-context";
import { Record } from "../../interfaces";

function SearchFilter() {
  const { dispatch } = useContext(RecordDispatch);
  const { records } = useContext(RecordContext);
  const [searchKey, setSearchKey] = useState("");

  const debouncedSearchKey = useDebounce(searchKey, 500);

  useEffect(() => {
    let results: Array<Record> = [];
    records &&
      Object.keys(records).forEach((recordKey: string) => {
        const record = records[recordKey];
        if (
          record.productName
            .toLowerCase()
            .includes(debouncedSearchKey.toLowerCase())
        ) {
          // do sorting here
          results.push(record);
        }
      });

    results.sort((firstEl: Record, secondEl: Record): number => {
      return (
        new Date(secondEl.productDate).getTime() -
        new Date(firstEl.productDate).getTime()
      );
    });

    dispatch({
      type: SET_FILTERED_RECORDS,
      payload: results
    });
  }, [debouncedSearchKey, records]);

  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchKey}
        aria-label="Find item by name"
        onChange={e => setSearchKey(e.target.value)}
        placeholder="Find item by name"
      />
      <div className="search-icon">
        <SVGInline height="16px" width="16px" svg={`${MagnifyingGlass}`} />
      </div>
    </div>
  );
}

export default SearchFilter;
