import React, { useState, useEffect, useContext } from "react";
import SVGInline from "react-svg-inline";
import MagnifyingGlass from "./magnifier.svg";
import { RecordDispatch, RecordContext } from "../../context";
import { useDebounce } from "../../hooks";
import { SET_FILTERED_RECORDS } from "../../context/record-context";

function SearchFilter() {
  const { dispatch } = useContext(RecordDispatch);
  const { records } = useContext(RecordContext);
  const [searchKey, setSearchKey] = useState("");

  const debouncedSearchKey = useDebounce(searchKey, 500);

  console.log({ records });

  useEffect(() => {
    const results = records.filter(record =>
      record.productName.includes(debouncedSearchKey)
    );
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
