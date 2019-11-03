import React, { useEffect, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { RecordCardContext } from "../../../../context";

interface RecordCardProps {
  children: Object;
  isFirstCard?: boolean;
  currentAction?: string;
  setCurrentAction: React.Dispatch<any>;
}

const RecordCard = ({
  children,
  isFirstCard,
  currentAction,
  setCurrentAction
}: RecordCardProps) => {
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
    <div className="record-card-container flex-parent">
      {!isFirstCard ? (
        <button
          className="close-button"
          onClick={e => {
            e.stopPropagation();
            if (currentAction == "edit") {
              setCurrentAction("view");
            } else {
              setCurrentAction(null);
              setShowRecordCard(null);
            }
          }}
        >
          <span>x</span>
        </button>
      ) : null}

      {children}
    </div>,
    elRef.current
  );
};

export default RecordCard;
