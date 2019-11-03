import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./base-styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./components/nav-bar/nav-bar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { RecordCardContext, RecordContextProvider } from "./context";

function App() {
  const [showRecordCard, setShowRecordCard] = useState(null);

  return (
    <div className="main-container">
      <RecordContextProvider>
        <RecordCardContext.Provider
          value={{
            showRecordCard,
            setShowRecordCard
          }}
        >
          <div className="app-body">
            <NavBar></NavBar>
            <Header title={"Items"}></Header>
            <Main></Main>
            <div id="record-card"></div>
          </div>
        </RecordCardContext.Provider>
      </RecordContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
