// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import { Tree } from "./Tree";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

// Enzyme.configure({ adapter: new Adapter() });

const getLinkId = ({ from = "", to = "" } = {}) => `${from}-${to}`;

describe("Tree", () => {
  const nodesData = [
    [
      { id: "A", name: "A" },
      { id: "B", name: "B" }
    ]
  ];
  const invalidnodesData = [[{ name: "A" }, { name: "B" }]];
  const links = [{ from: "A", to: "B" }];

  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it("can create empty Tree", () => {
    const component = renderer.create(<Tree />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("can create simple Tree", () => {
    const component = renderer.create(<Tree nodes={nodesData} links={links} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("can create simple Tree with invalid node data", () => {
    const component = renderer.create(<Tree nodes={invalidnodesData} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("can create simple Tree with custom NodeElement", () => {
    const NodeElement = ({ id, name }) => <button id={id}>{name}</button>;
    const component = renderer.create(
      <Tree nodes={nodesData} links={links} NodeElement={NodeElement} />
    );
    expect(component.root.findAllByType(NodeElement)).toHaveLength(2);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("can render simple Tree", () => {
    ReactDOM.render(<Tree nodes={nodesData} links={links} />, container);

    // expect all nodeData to have been rendered with className "Node"
    const domNodes = container.querySelectorAll(".Node");
    const nodeDataIds = nodesData.flat().map(node => node.id);
    expect(domNodes.length).toBe(nodeDataIds.length);
    domNodes.forEach((domNode, i) => {
      expect(domNode.id).toBe(nodeDataIds[i]);
    });

    // expect all links to have been rendered with className "Link"
    const domLinks = container.querySelectorAll(".Link");
    expect(domLinks.length).toBe(links.length);
    domLinks.forEach((domLink, i) => {
      const { from, to } = links[i] || {};
      const expectedId = `${from}-${to}`;
      expect(domLink.id).toBe(expectedId);
    });
  });
  it("can render and activate Nodes", () => {
    ReactDOM.render(<Tree nodes={nodesData} links={links} />, container);
    const domNodes = container.querySelectorAll(".Node");
    const clickedNode = domNodes[0];
    act(() => {
      clickedNode.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const activeNode = container.querySelector(".Node.active");
    expect(activeNode).toBeDefined();
    expect(activeNode).toEqual(expect.objectContaining({ id: clickedNode.id }));

    const activeLink = container.querySelector(".Link.active");
    const expectedLinkId = getLinkId(links[0]);
    expect(activeLink).toBeDefined();
    expect(activeLink).toEqual(expect.objectContaining({ id: expectedLinkId }));
  });
  it("can render and deactivate Nodes", () => {
    ReactDOM.render(<Tree nodes={nodesData} links={links} />, container);
    const domNodes = container.querySelectorAll(".Node");
    const clickedNode = domNodes[0];
    act(() => {
      clickedNode.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      clickedNode.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const activeNode = container.querySelector(".Node.active");
    expect(activeNode).toBeNull();

    const activeLink = container.querySelector(".Link.active");
    expect(activeLink).toBeNull();
  });
  it("can render and ignore invalid Links", () => {
    const invalidLinks = [{ from: "A" }];
    ReactDOM.render(<Tree nodes={nodesData} links={invalidLinks} />, container);
    const domNodes = container.querySelectorAll(".Node");
    const clickedNode = domNodes[0];
    act(() => {
      clickedNode.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const activeNode = container.querySelector(".Node.active");
    expect(activeNode).toBeDefined();

    const activeLink = container.querySelector(".Link.active");
    expect(activeLink).toBeNull();
  });
  it("can render with invalid node data", () => {
    ReactDOM.render(<Tree nodes={invalidnodesData} links={links} />, container);
    const domNode = container.querySelector(".Node");
    expect(domNode).toBeDefined();
    const domLink = container.querySelector(".Links");
    expect(domLink).toBeNull();
  });
});
