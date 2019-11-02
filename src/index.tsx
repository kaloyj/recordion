import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./base-styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./components/nav-bar/nav-bar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { RecordCardContext } from "./context";

function App() {
  const [showRecordCard, setShowRecordCard] = useState(null);
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState(records);

  console.log("records!", { records });

  useEffect(() => {
    if (records) {
      setFilteredRecords(records);
    }
  }, [records, setFilteredRecords]);

  return (
    <div className="main-container">
      <RecordCardContext.Provider value={{ showRecordCard, setShowRecordCard }}>
        <div className="app-body">
          <NavBar></NavBar>
          <Header
            title={"Items"}
            records={records}
            setFilteredRecords={setFilteredRecords}
          ></Header>
          <Main
            filteredRecords={filteredRecords}
            records={records}
            setRecords={setRecords}
          ></Main>
        </div>
      </RecordCardContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
