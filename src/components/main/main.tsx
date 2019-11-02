import React, { useContext } from "react";
import { RecordListItem, RecordCard } from "../record/";
import AddButton from "../add-button/add-button";
import { RecordCardContext } from "../../context";
import RecordDetails from "../record/components/record-details/record-details";

function Main() {
  const { showRecordCard } = useContext(RecordCardContext);
  return (
    <div className="body-container">
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>
      <RecordListItem record={{}}></RecordListItem>

      <AddButton></AddButton>

      {showRecordCard == "test" ? (
        <RecordCard>
          <RecordDetails record={{}}></RecordDetails>
        </RecordCard>
      ) : null}
    </div>
  );
}

export default Main;
