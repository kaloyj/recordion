import React, { useContext, useState, useEffect } from "react";
import { RecordListItem, RecordCard, RecordForm } from "../record/";
import AddButton from "../add-button/add-button";
import { RecordCardContext, RecordContext } from "../../context";
import RecordDetails from "../record/components/record-details/record-details";
import { AnimatePresence } from "framer-motion";

function Main() {
  const { showRecordCard, setShowRecordCard } = useContext(RecordCardContext);
  const [currentAction, setCurrentAction] = useState(null);
  const { records, filteredRecords, idTracker } = useContext(RecordContext);
  const isRecordsEmpty = records && Object.keys(records).length == 0;

  useEffect(() => {
    if (isRecordsEmpty) {
      setCurrentAction("add");
    }
  }, [isRecordsEmpty]);

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  useEffect(() => {
    localStorage.setItem("idTracker", `${idTracker}`);
  }, [idTracker]);

  return (
    <div className="body-container">
      {filteredRecords && filteredRecords.length ? (
        <AnimatePresence>
          {filteredRecords.map(record => {
            const selected = showRecordCard == record.id;
            return (
              <div className="filtered-records flex-1" key={record.id}>
                <RecordListItem
                  key={record.id}
                  currentAction={currentAction}
                  setCurrentAction={setCurrentAction}
                  record={record}
                  selected={selected}
                ></RecordListItem>

                <AnimatePresence>
                  {selected && currentAction == "view" ? (
                    <RecordCard
                      setCurrentAction={setCurrentAction}
                      currentAction={currentAction}
                    >
                      <RecordDetails
                        record={record}
                        records={records}
                        currentAction={currentAction}
                        setCurrentAction={setCurrentAction}
                      ></RecordDetails>
                    </RecordCard>
                  ) : null}
                </AnimatePresence>

                <AnimatePresence>
                  {selected && currentAction == "edit" ? (
                    <RecordCard
                      setCurrentAction={setCurrentAction}
                      currentAction={currentAction}
                    >
                      <RecordForm
                        records={records}
                        record={record}
                        idTracker={idTracker}
                        setCurrentAction={setCurrentAction}
                      ></RecordForm>
                    </RecordCard>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatePresence>
      ) : (
        <div>No items found.</div>
      )}

      <AddButton setCurrentAction={setCurrentAction}></AddButton>

      <AnimatePresence>
        {currentAction == "add" && showRecordCard == null ? (
          <RecordCard
            isFirstCard={isRecordsEmpty}
            setCurrentAction={setCurrentAction}
            currentAction={currentAction}
          >
            <RecordForm
              records={records}
              idTracker={idTracker}
              setCurrentAction={setCurrentAction}
            ></RecordForm>
          </RecordCard>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Main;
