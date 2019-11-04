import React, { createContext, useReducer } from "react";
import { Record } from "../interfaces";

//actions
export const SET_FILTERED_RECORDS = "SET_FILTERED_RECORDS";
export const SET_RECORDS_ID_TRACKER = "SET_RECORDS_ID_TRACKER";

const initialState: {
  filteredRecords: Array<Record>;
  idTracker: number;
} = {
  filteredRecords: [],
  idTracker: 0
};

const reducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
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
