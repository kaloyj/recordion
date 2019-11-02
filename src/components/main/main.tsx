import React, { useContext } from "react";
import { RecordListItem, RecordCard, RecordForm } from "../record/";
import AddButton from "../add-button/add-button";
import { RecordCardContext } from "../../context";
import RecordDetails from "../record/components/record-details/record-details";

function Main() {
  const { showRecordCard } = useContext(RecordCardContext);
  return (
    <div className="body-container">
      <AddButton></AddButton>

      {showRecordCard == "test" ? (
        <RecordCard>
          <RecordDetails record={{}}></RecordDetails>
        </RecordCard>
      ) : null}

      {showRecordCard == "add" ? (
        <RecordCard>
          <RecordForm></RecordForm>
        </RecordCard>
      ) : null}
    </div>
  );
}

export default Main;
