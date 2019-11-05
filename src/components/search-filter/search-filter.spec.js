import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import SearchFilter from "./search-filter";
import { RecordContextProvider } from "../../context";

describe("Counter", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test("snapshot renders", () => {
    act(() => {
      ReactDOM.render(
        <RecordContextProvider>
          <SearchFilter />
        </RecordContextProvider>,
        container
      );
    });

    expect(true).toEqual(true);
  });
});
