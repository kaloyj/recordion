import React from "react";
import ReactDOM from "react-dom";
import "./base-styles/index.scss";
import NavBar from "./components/nav-bar/nav-bar";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  return (
    <div className="main-container">
      <div className="app-body">
        <NavBar></NavBar>
        <Header title={"Items"}></Header>
        <Main></Main>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
