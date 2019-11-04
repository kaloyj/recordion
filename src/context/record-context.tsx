import React, { createContext, useReducer, useEffect } from "react";
import { Record, Records } from "../interfaces";

//actions
export const SET_RECORDS = "SET_RECORDS";
export const SET_FILTERED_RECORDS = "SET_FILTERED_RECORDS";
export const SET_RECORDS_ID_TRACKER = "SET_RECORDS_ID_TRACKER";

function getInitialRecordsState(): Records {
  try {
    const records = localStorage.getItem("records");
    if (records) {
      return JSON.parse(localStorage.getItem("records"));
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

const initialState: {
  records: Records;
  filteredRecords: Array<Record>;
  idTracker: number;
} = {
  records: getInitialRecordsState(),
  filteredRecords: [],
  idTracker: Number(localStorage.getItem("idTracker"))
};

const reducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_RECORDS:
      return { ...state, records: action.payload };
    case SET_FILTERED_RECORDS:
      return {
        ...state,
        filteredRecords: action.payload
      };
    case SET_RECORDS_ID_TRACKER:
      return { ...state, idTracker: action.payload };
    default:
      return;
  }
};

const RecordContext = createContext(initialState);
const RecordDispatch = createContext(null);

function RecordContextProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RecordDispatch.Provider value={{ dispatch }}>
      <RecordContext.Provider value={{ ...state }}>
        {children}
      </RecordContext.Provider>
    </RecordDispatch.Provider>
  );
}

export { RecordContext, RecordDispatch, RecordContextProvider };
