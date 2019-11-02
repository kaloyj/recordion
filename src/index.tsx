import React from "react";
import ReactDOM from "react-dom";
import "./base-styles/index.scss";
import NavBar from "./nav-bar/nav-bar";
import Header from "./header/header";
import Main from "./main/main";

function App() {
  return (
    <div className="main-container">
      <div className="app-body">
        <NavBar></NavBar>
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
