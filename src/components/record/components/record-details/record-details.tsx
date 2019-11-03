import React, { useContext, useState } from "react";
import { Record } from "../../../../interfaces";
import { RecordDispatch, RecordCardContext } from "../../../../context";
import { SET_RECORDS, RecordContext } from "../../../../context/record-context";
import RecordForm from "../record-form/record-form";
import { RecordCard } from "../..";

interface RecordDetailsProps {
  record: Record;
  records: Map<Number, Record>;
}

function RecordDetails({ record, records }: RecordDetailsProps) {
  const {
    id,
    productName,
    productDescription,
    imageLink,
    productDate
  } = record;
  const { dispatch } = useContext(RecordDispatch);
  const { idTracker } = useContext(RecordContext);
  const { showRecordCard, setShowRecordCard } = useContext(RecordCardContext);
  const [isEditingRecord, setIsEditingRecord] = useState(false);

  console.log({ showRecordCard });
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
          Created on <span>{productDate.toDateString()}</span>
        </div>

        <div className="product-description flex-1">
          {productDescription ? productDescription : "No description set"}
        </div>

        <div className="product-actions flex-1">
          <button
            className="default"
            onClick={() => {
              console.log("clicked!");
              setIsEditingRecord(true);
            }}
          >
            Edit
          </button>
          <button
            className="danger"
            onClick={() => {
              setShowRecordCard(null);
              const newRecords = new Map([...records]);
              if (newRecords.delete(id)) {
                console.log("in hereee", { newRecords });
                dispatch({
                  type: SET_RECORDS,
                  payload: newRecords
                });
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>

      {isEditingRecord && showRecordCard == id ? (
        <RecordCard>
          <RecordForm
            records={records}
            record={record}
            idTracker={idTracker}
          ></RecordForm>
        </RecordCard>
      ) : null}
    </div>
  );
}

export default RecordDetails;
