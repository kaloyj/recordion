import React, { useContext } from "react";
import { RecordCardContext } from "../../../../context";
import { Record, Records } from "../../../../interfaces";
import { motion, AnimatePresence } from "framer-motion";

interface RecordProps {
  record: Record;
  selected: boolean;
  currentAction: string;
  setCurrentAction: React.Dispatch<any>;
}

const listItem = {
  down: { y: 200 },
  rise: { y: 0, transition: { type: "spring", stiffness: 300, damping: 200 } },
  exit: { zIndex: 0, opacity: 0, ransition: { duration: 0.05 } }
};

function RecordListItem({ record, selected, setCurrentAction }: RecordProps) {
  const { id, productName, imageLink, productDate } = record;
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <motion.div
      key={record.id}
      positionTransition
      variants={listItem}
      initial="down"
      animate="rise"
      exit="exit"
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
      onKeyDown={e => {
        e.stopPropagation();
        setShowRecordCard(id);
        setCurrentAction("view");
      }}
      tabIndex={0}
      role="button"
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
        <div className="subtitle">{new Date(productDate).toDateString()}</div>
      </div>
    </motion.div>
  );
}

export default RecordListItem;
