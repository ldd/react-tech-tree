import React from "react";
import usePosition from "./usePosition";
import { render } from "react-dom";

describe("hook [usePosition]", () => {
  let container;
  let position;

  const renderComponent = Component => render(Component, container);

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    position = undefined;
  });

  it("can augment empty links", () => {
    const Content = () => {
      position = usePosition();
      return <div />;
    };
    renderComponent(<Content />);
    expect(Array.isArray(position.nodePositions)).toBeTruthy();
    expect(position.nodePositions).toHaveLength(0);
  });

  it("can augment a single link", () => {
    const Content = () => {
      position = usePosition({ links: [{ from: "A", to: "B" }] });
      return (
        <div ref={position.ref}>
          <div id="A" />
          <div id="B" />
        </div>
      );
    };
    renderComponent(<Content />);
    expect(position.nodePositions).toHaveLength(1);
    expect(typeof position.nodePositions[0].pathData).toBe("string");
  });
  it("can augment a single linkss", () => {
    const DEFAULT_PATH = "M 0 0 L 0 0";
    const Content = () => {
      const links = [{ from: "A", to: "B" }];
      const pathMaker = () => DEFAULT_PATH;
      position = usePosition({ links, pathMaker });
      return (
        <div ref={position.ref}>
          <div id="A" />
          <div id="B" />
        </div>
      );
    };
    renderComponent(<Content />);
    expect(position.nodePositions).toHaveLength(1);
    expect(position.nodePositions[0].pathData).toBe(DEFAULT_PATH);
  });
});
