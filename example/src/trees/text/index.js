import React from "react";
import { nodeClickHandler, Tree } from "react-tech-tree";
import treeData from "./data/tree.json";
import "./index.css";

const { nodes, links } = treeData;

const MyNodeElement = ({ name, id }) => (
  <button id={id} className="Node" onClick={nodeClickHandler}>
    {name}
  </button>
);

function TextTree() {
  return (
    <Tree
      id="text-tree"
      nodes={nodes}
      links={links}
      NodeElement={MyNodeElement}
    />
  );
}

export default TextTree;
