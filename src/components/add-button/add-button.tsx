import React, { useContext } from "react";
import { RecordCardContext } from "../../context";
import { motion } from "framer-motion";

function AddButton({
  setCurrentAction
}: {
  setCurrentAction: React.Dispatch<any>;
}) {
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="add-button"
      onClick={() => {
        setShowRecordCard(null);
        setCurrentAction("add");
      }}
    >
      <span>+</span>
    </motion.button>
  );
}

export default AddButton;
