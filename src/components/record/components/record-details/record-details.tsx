import React, { useContext, useState } from "react";
import { Record } from "../../../../interfaces";
import { RecordDispatch, RecordCardContext } from "../../../../context";
import { SET_RECORDS, RecordContext } from "../../../../context/record-context";
import { motion } from "framer-motion";

interface RecordDetailsProps {
  record: Record;
  records: Map<Number, Record>;
  currentAction: string;
  setCurrentAction: React.Dispatch<any>;
}

function RecordDetails({
  record,
  records,
  currentAction,
  setCurrentAction
}: RecordDetailsProps) {
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
        <div className="product-date flex-1 subtitle">
          Created on <span>{productDate.toDateString()}</span>
        </div>

        <div className="product-description flex-1">
          {productDescription ? productDescription : "No description set"}
        </div>

        <div className="product-actions flex-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="default"
            onClick={e => {
              e.stopPropagation();
              setShowRecordCard(id);
              setCurrentAction("edit");
            }}
          >
            Edit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="danger"
            onClick={e => {
              e.stopPropagation();
              setCurrentAction(null);
              setShowRecordCard(null);
              const newRecords = new Map([...records]);
              if (newRecords.delete(id)) {
                dispatch({
                  type: SET_RECORDS,
                  payload: newRecords
                });
              }
            }}
          >
            Delete
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default RecordDetails;
