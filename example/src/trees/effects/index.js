import React from "react";
import { Tree } from "react-tech-tree";
import treeData from "./data/tree.json";
import "./index.css";

const { nodes, links } = treeData;

const styleName = name => ({
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/${name}.png)`,
  width: 34,
  height: 34
});

function EffectsTree() {
  return (
    <Tree
      id="effects-tree"
      nodes={nodes}
      links={links}
      nodeProps={{ styleName }}
    />
  );
}

export default EffectsTree;
