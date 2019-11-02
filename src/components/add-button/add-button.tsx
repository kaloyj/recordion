import React, { useContext } from "react";
import { RecordCardContext } from "../../context";

function AddButton() {
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <button className="add-button" onClick={() => setShowRecordCard("add")}>
      <span>+</span>
    </button>
  );
}

export default AddButton;
