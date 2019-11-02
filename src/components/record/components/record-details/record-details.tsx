import React, { useContext } from "react";
import { Record } from "../../../../interfaces";
import { RecordDispatch, RecordCardContext } from "../../../../context";
import { SET_RECORDS } from "../../../../context/record-context";

interface RecordDetailsProps {
  record: Record;
  records: Array<Record>;
}

function RecordDetails({
  record: { id, productName, productDescription, imageLink, productDate },
  records
}: RecordDetailsProps) {
  const { dispatch } = useContext(RecordDispatch);
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <div className="record-details-container flex-parent">
      <div className="product-image flex-1">
        {imageLink ? (
          <img src={imageLink} alt="product image"></img>
        ) : (
          <div className="image-placeholder flex-parent"></div>
        )}
      </div>

      <div className="product-content margined-flex-1">
        <h2 className="product-title flex-1">{productName}</h2>
        <div className="product-date flex-1">
          Created on <span>{productDate}</span>
        </div>

        <div className="product-description flex-1">
          {productDescription ? productDescription : "No description set"}
        </div>

        <div className="product-actions flex-1">
          <button className="default">Edit</button>
          <button
            className="danger"
            onClick={() => {
              setShowRecordCard(null);
              const index = records.findIndex(record => record.id == id);
              const newRecords = [...records];
              newRecords.splice(index, 1);

              dispatch({
                type: SET_RECORDS,
                payload: newRecords
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordDetails;
