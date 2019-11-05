import React, { useContext, useState } from "react";
import { Record, Records } from "../../../../interfaces";
import { RecordDispatch, RecordCardContext } from "../../../../context";
import { SET_RECORDS, RecordContext } from "../../../../context/record-context";
import { motion } from "framer-motion";
import update from "immutability-helper";
import SVGInline from "react-svg-inline";
import PhotoPlaceholder from "../record-form/photo-placeholder.svg";

interface RecordDetailsProps {
  record: Record;
  records: Records;
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
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="record-details-container flex-parent">
      <div className="product-image flex-1">
        {imageLink ? (
          <img
            src={imageLink}
            onError={() => setIsValid(false)}
            onLoad={() => setIsValid(true)}
            style={{ display: isValid ? "inline-block" : "none" }}
            alt="product image"
          ></img>
        ) : null}

        {!isValid ? (
          <div className="image-placeholder flex-parent">
            <span>
              <SVGInline height="40px" width="40px" svg={PhotoPlaceholder} />
            </span>
          </div>
        ) : null}
      </div>

      <div className="product-content margined-flex-1">
        <h2 className="product-title flex-1">{productName}</h2>
        <div className="product-date flex-1 subtitle">
          Created on <span>{new Date(productDate).toDateString()}</span>
        </div>

        <div className="product-description flex-1">
          {productDescription ? productDescription : "No description set"}
        </div>

        <div className="product-image-src flex-1">
          <p className="flex-1">Image link: </p>
          <a href={imageLink} target="_blank" rel="noopener noreferrer">
            {imageLink}
          </a>
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
              dispatch({
                type: SET_RECORDS,
                payload: update(records, {
                  $unset: [id]
                })
              });
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
