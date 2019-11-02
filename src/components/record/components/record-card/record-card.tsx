import React, { useEffect, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { RecordCardContext } from "../../../../context";

interface RecordCardProps {
  children: Object;
}

const RecordCard = ({ children }: RecordCardProps) => {
  const elRef = useRef(null);
  const { setShowRecordCard } = useContext(RecordCardContext);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("record-card");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="record-card-container">
      <button className="close-button" onClick={() => setShowRecordCard(null)}>
        <span>x</span>
      </button>
      {children}
    </div>,
    elRef.current
  );
};

export default RecordCard;
