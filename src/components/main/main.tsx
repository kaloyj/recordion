import React, { useContext } from "react";
import { RecordListItem, RecordCard } from "../record/";
import AddButton from "../add-button/add-button";
import RecordListItemCard from "../record/components/record-card/record-card";
import { RecordCardContext } from "../../context";

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
          <div>hello</div>
        </RecordCard>
      ) : null}
    </div>
  );
}

export default Main;
