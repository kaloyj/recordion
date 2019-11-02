import React, { useContext } from "react";
import { RecordCardContext } from "../../../../context";

interface RecordProps {
  record: {
    imageLink: string;
  };
}

function RecordListItem({ record }: RecordProps) {
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <div
      className="record-list-item-container"
      onClick={() => setShowRecordCard("test")}
    >
      <div className="product-image">
        {record.imageLink ? (
          <img></img>
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>

      <div className="data-preview">
        <h2>Name</h2>
        <div>Date</div>
      </div>
    </div>
  );
}

export default RecordListItem;
