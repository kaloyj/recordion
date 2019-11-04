import React, { useEffect, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { RecordCardContext } from "../../../../context";
import { motion, AnimatePresence } from "framer-motion";

interface RecordCardProps {
  children: Object;
  isFirstCard?: boolean;
  currentAction: string;
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
    elRef.current.focus();
    return () => {
      elRef.current.blur();
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  const container = {
    hidden: {
      y: 200,
      zIndex: 0,
      opacity: 0
    },
    visible: {
      y: 0,
      zIndex: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 200
        // delay: 1
      }
    },
    exit: {
      y: 200,
      zIndex: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 200,
        duration: 0.1
      }
    }
  };

  return createPortal(
    <motion.div
      key={currentAction}
      className="record-card-container flex-parent"
      variants={container}
      initial="hidden"
      animate="visible"
      exit={
        currentAction == "view" || currentAction == "add" ? "exit" : "false"
      } // add exit animation if no pending action
    >
      {!isFirstCard ? (
        <button
          className="close-button"
          onClick={e => {
            e.stopPropagation();
            if (currentAction == "edit") {
              // after editing, go back to view record
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
    </motion.div>,
    elRef.current
  );
};

export default RecordCard;
