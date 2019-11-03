import React, { useContext } from "react";
import { RecordCardContext } from "../../context";

function AddButton({
  setCurrentAction
}: {
  setCurrentAction: React.Dispatch<any>;
}) {
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <button
      className="add-button"
      onClick={() => {
        setShowRecordCard(null);
        setCurrentAction("use-form");
      }}
    >
      <span>+</span>
    </button>
  );
}

export default AddButton;
