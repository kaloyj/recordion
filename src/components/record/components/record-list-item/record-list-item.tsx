import React, { useContext } from "react";
import { RecordCardContext } from "../../../../context";
import { Record } from "../../../../interfaces";

interface RecordProps {
  record: Record;
}

function RecordListItem({
  record: { id, productName, imageLink, productDate }
}: RecordProps) {
  const { setShowRecordCard, setRecordCardActionType } = useContext(
    RecordCardContext
  );
  return (
    <div
      className="record-list-item-container flex-parent"
      onClick={() => {
        setShowRecordCard(id);
        setRecordCardActionType("view");
      }}
    >
      <div className="product-image">
        {imageLink ? (
          <img src={imageLink}></img>
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>

      <div className="data-preview">
        <h2>{productName}</h2>
        <div>{productDate}</div>
      </div>
    </div>
  );
}

export default RecordListItem;
