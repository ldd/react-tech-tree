import React from "react";
import { Tree, prepareSpritesheetStyle } from "react-tech-tree";
import treeData from "./data/tree.json";
import spriteInformation from "./data/spritesheet.json";
import spriteImage from "./data/spritesheet.png";
import "./index.css";

const { nodes, links } = treeData;

function SlayTree() {
  return (
    <Tree
      id="slay-tree"
      nodes={nodes}
      links={links}
      nodeProps={{
        styleName: prepareSpritesheetStyle(spriteImage, spriteInformation)
      }}
    />
  );
}

export default SlayTree;
