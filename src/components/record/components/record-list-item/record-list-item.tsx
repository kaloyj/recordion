import React, { useContext } from "react";
import { RecordCardContext } from "../../../../context";
import { Record } from "../../../../interfaces";

interface RecordProps {
  records: Map<Number, Record>;
  record: Record;
  selected: boolean;
  currentAction: string;
  setCurrentAction: React.Dispatch<any>;
}

function RecordListItem({ record, selected, setCurrentAction }: RecordProps) {
  const { id, productName, imageLink, productDate } = record;
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <div
      className={
        selected
          ? "record-list-item-container flex-parent selected"
          : "record-list-item-container flex-parent"
      }
      onClick={e => {
        e.stopPropagation();
        setShowRecordCard(id);
        setCurrentAction("view");
      }}
    >
      <div className="product-image">
        {/* {imageLink ? (
          <img src={imageLink}></img>
        ) : (
          <div className="image-placeholder">
            <span>{productName.charAt(0)}</span>
          </div>
        )} */}
        <div className="image-placeholder">
          <span>{productName.charAt(0)}</span>
        </div>
      </div>

      <div className="data-preview">
        <h3>{productName}</h3>
        <div className="subtitle">{productDate.toDateString()}</div>
      </div>
    </div>
  );
}

export default RecordListItem;
