import React from "react";
import { Tree, prepareSpritesheetStyle } from "react-tech-tree";
import treeData from "./data/tree.json";
import spriteInformation from "./data/spritesheet.json";
import spriteImage from "./data/spritesheet.png";
import "./index.css";
import { linkPathMaker as pathMaker } from "./linkHelper";

const { nodes, links } = treeData;

function EffectsTree() {
  return (
    <Tree
      id="superhero-tree"
      nodes={nodes}
      links={links}
      nodeProps={{
        styleName: prepareSpritesheetStyle(spriteImage, spriteInformation)
      }}
      linkProps={{ pathMaker }}
    />
  );
}

export default EffectsTree;
