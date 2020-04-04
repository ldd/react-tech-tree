import React from "react";
import { nodeClickHandler, Tree } from "react-tech-tree";
import treeData from "../text/data/tree.json";
import "../text/index.css";
import ReactTooltip from "react-tooltip";

const { nodes, links } = treeData;

const MyNodeElement = ({ name, id }) => (
  <>
    <button
      id={id}
      className="Node"
      onClick={nodeClickHandler}
      data-tip
      data-for={`${id}-tooltip`}
    >
      {name}
    </button>
    <ReactTooltip id={`${id}-tooltip`} type="dark">
      <span>
        <b>{name}</b> has no further information :( for you
      </span>
    </ReactTooltip>
  </>
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
