import React from "react";
import {
  Tree,
  prepareSpritesheetStyle,
  nodeClickHandler
} from "react-tech-tree";
import treeData from "./data/tree.json";
import spriteInformation from "./data/spritesheet.json";
import spriteImage from "./data/spritesheet.png";
import "./index.css";

const { nodes, links } = treeData;
const nodeDic = Object.fromEntries(nodes.flat().map(node => [node.id, node]));

const styleName = prepareSpritesheetStyle(spriteImage, spriteInformation);

const toggleNode = (target, isActive) => {
  // nodes is a 2D Array so flatten it
  const pick = nodeDic[target.id];
  if (!pick) return;

  // there are active alternatives on our tilesheet, which all end in "M"
  // so we modify our target to match the newly picked sprite props
  const oldSpriteName = pick.name;
  const newSpriteName = isActive ? oldSpriteName : `${oldSpriteName}M`;

  // ignore sprites with no active alternative
  if (!spriteInformation.frames[newSpriteName]) return;

  const newStyleProps = styleName(newSpriteName);
  Object.entries(newStyleProps).forEach(
    ([key, value]) => (target.style[key] = value)
  );
};

const onClick = e => {
  nodeClickHandler(e);
  const isActive = e.target.classList.contains("active");
  toggleNode(e.target, !isActive);
};

function SlayTree() {
  return (
    <Tree
      id="slay-tree"
      nodes={nodes}
      links={links}
      nodeProps={{ styleName, onClick }}
    />
  );
}

export default SlayTree;
