import React from "react";
import { render } from "react-dom";
import { Simulate } from "react-dom/test-utils";
import { Node } from "./Node";

describe("React Component [Node]", () => {
  it("can test Nodes near invalid Links", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const invalidLinkId = "AB";
    render(
      <>
        <div className="Link" id={invalidLinkId} />
        <Node id="A" />
      </>,
      container
    );
    const domNode = container.querySelector(".Node");
    Simulate.click(domNode);
    document.body.removeChild(container);
  });
});
