import React, { useContext, useState, useEffect } from "react";
import { RecordListItem, RecordCard, RecordForm } from "../record/";
import AddButton from "../add-button/add-button";
import {
  RecordCardContext,
  RecordContext,
  RecordDispatch
} from "../../context";
import RecordDetails from "../record/components/record-details/record-details";
import { SET_FILTERED_RECORDS } from "../../context/record-context";

function Main() {
  const { showRecordCard, setShowRecordCard } = useContext(RecordCardContext);
  const { records, filteredRecords, idTracker } = useContext(RecordContext);

  useEffect(() => {
    if (records && records.length == 0) {
      setShowRecordCard("add");
    }
  }, [records]);

  return (
    <div className="body-container">
      {filteredRecords && filteredRecords.length ? (
        filteredRecords.map(record => (
          <div className="flex-1" key={record.id}>
            <RecordListItem record={record}></RecordListItem>
            {showRecordCard == record.id ? (
              <RecordCard>
                <RecordDetails
                  record={record}
                  records={records}
                ></RecordDetails>
              </RecordCard>
            ) : null}
          </div>
        ))
      ) : (
        <div>No items found.</div>
      )}
      <AddButton></AddButton>

      {showRecordCard == "add" ? (
        <RecordCard isFirstCard={records && records.length == 0}>
          <RecordForm records={records} idTracker={idTracker}></RecordForm>
        </RecordCard>
      ) : null}
    </div>
  );
}

export default Main;
