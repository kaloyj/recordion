import React, { useContext } from "react";
import { RecordCardContext } from "../../context";

function AddButton() {
  const { setRecordCardActionType } = useContext(RecordCardContext);
  return (
    <button
      className="add-button"
      onClick={() => setRecordCardActionType("add")}
    >
      <span>+</span>
    </button>
  );
}

export default AddButton;
