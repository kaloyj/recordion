import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import SearchFilter from "./search-filter";
import { RecordCardContext, RecordContextProvider } from "../../context";
import Main from "../main/main";

describe("Search Filter Component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test("search functionality", () => {
    act(() => {
      ReactDOM.render(
        <RecordContextProvider>
          <RecordCardContext.Provider
            value={{
              showRecordCard: true
            }}
          >
            <SearchFilter />
            <Main></Main>
          </RecordCardContext.Provider>
        </RecordContextProvider>,
        container
      );
    });

    const searchBar = container.querySelector("input");
    const outputBox = container.querySelector(".filtered-records");
    expect(searchBar.placeholder).toEqual("Find item by name");
    expect(outputBox).toEqual(null);

    act(() => {
      searchBar.value = "Test";
    });

    expect(searchBar.value).toEqual("Test");
  });
});
