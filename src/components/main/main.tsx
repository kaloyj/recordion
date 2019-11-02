import React, { useContext, useState, useEffect } from "react";
import { RecordListItem, RecordCard, RecordForm } from "../record/";
import AddButton from "../add-button/add-button";
import { RecordCardContext } from "../../context";
import RecordDetails from "../record/components/record-details/record-details";

interface MainProps {
  filteredRecords: Array<{
    productName: string;
    productDescription: string;
    imageLink: string;
    productDate: string;
  }>;
  records: Array<{
    productName: string;
    productDescription: string;
    imageLink: string;
    productDate: string;
  }>;
  setRecords: React.Dispatch<React.SetStateAction<{}>>;
}

function Main({ filteredRecords, records, setRecords }: MainProps) {
  const { showRecordCard, setShowRecordCard } = useContext(RecordCardContext);

  useEffect(() => {
    if (records && records.length == 0) {
      setShowRecordCard("add");
    }
  }, [records]);

  return (
    <div className="body-container">
      {filteredRecords && filteredRecords.length ? (
        filteredRecords.map((record, index) => (
          <RecordListItem key={index} record={record}></RecordListItem>
        ))
      ) : (
        <div>No items found.</div>
      )}
      <AddButton></AddButton>

      {showRecordCard == "test" ? (
        <RecordCard>
          <RecordDetails record={records[0]}></RecordDetails>
        </RecordCard>
      ) : null}

      {showRecordCard == "add" ? (
        <RecordCard isFirstCard={records.length == 0}>
          <RecordForm records={records} setRecords={setRecords}></RecordForm>
        </RecordCard>
      ) : null}
    </div>
  );
}

export default Main;
