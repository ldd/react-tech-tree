import React from "react";
import ReactDOM from "react-dom";
import { Tree } from ".";

describe("", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tree />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
