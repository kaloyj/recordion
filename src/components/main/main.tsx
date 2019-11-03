import React, { useContext, useState, useEffect } from "react";
import { RecordListItem, RecordCard, RecordForm } from "../record/";
import AddButton from "../add-button/add-button";
import { RecordCardContext, RecordContext } from "../../context";
import RecordDetails from "../record/components/record-details/record-details";

function Main() {
  const { showRecordCard } = useContext(RecordCardContext);
  const [currentAction, setCurrentAction] = useState(null);
  const { records, filteredRecords, idTracker } = useContext(RecordContext);

  console.log({ currentAction, showRecordCard });

  useEffect(() => {
    if (records && records.size == 0) {
      setCurrentAction("use-form");
    }
  }, [records]);

  console.log("XCURRR", { currentAction, showRecordCard });

  return (
    <div className="body-container">
      {filteredRecords && filteredRecords.length ? (
        filteredRecords.map(record => {
          const selected = showRecordCard == record.id;
          return (
            <div className="flex-1" key={record.id}>
              <RecordListItem
                key={record.id}
                records={records}
                currentAction={currentAction}
                setCurrentAction={setCurrentAction}
                record={record}
                selected={selected}
              ></RecordListItem>

              {selected && currentAction == "view" ? (
                <RecordCard setCurrentAction={setCurrentAction}>
                  <RecordDetails
                    record={record}
                    records={records}
                    currentAction={currentAction}
                    setCurrentAction={setCurrentAction}
                  ></RecordDetails>
                </RecordCard>
              ) : null}

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
            </div>
          );
        })
      ) : (
        <div>No items found.</div>
      )}
      <AddButton setCurrentAction={setCurrentAction}></AddButton>

      {currentAction == "use-form" && showRecordCard == null ? (
        <RecordCard
          isFirstCard={records && records.size == 0}
          setCurrentAction={setCurrentAction}
        >
          <RecordForm
            records={records}
            idTracker={idTracker}
            setCurrentAction={setCurrentAction}
          ></RecordForm>
        </RecordCard>
      ) : null}
    </div>
  );
}

export default Main;
