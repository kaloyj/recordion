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

  console.log({ records });

  useEffect(() => {
    let results: Array<Record> = [];
    records.forEach(record => {
      if (record.productName.includes(debouncedSearchKey)) {
        // do sorting here
        results.push(record);
      }
    });

    console.log("before", { results });

    results.sort((firstEl: Record, secondEl: Record): number => {
      return secondEl.productDate.getTime() - firstEl.productDate.getTime();
    });

    console.log("after", { results });

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
        onChange={e => setSearchKey(e.target.value)}
        placeholder="Find item by name"
      />
      <div className="search-icon">
        <SVGInline height="16px" width="16px" svg={MagnifyingGlass} />
      </div>
    </div>
  );
}

export default SearchFilter;
