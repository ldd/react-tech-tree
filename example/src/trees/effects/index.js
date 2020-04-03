import React from "react";
import { Tree, prepareSpritesheetStyle } from "react-tech-tree";
import treeData from "./data/tree.json";
import spriteInformation from "./data/spritesheet.json";
import spriteImage from "./data/spritesheet.png";
import "./index.css";

const { nodes, links } = treeData;

function EffectsTree() {
  return (
    <Tree
      id="effects-tree"
      nodes={nodes}
      links={links}
      nodeProps={{
        styleName: prepareSpritesheetStyle(spriteImage, spriteInformation),
        scale: 3
      }}
    />
  );
}

export default EffectsTree;
