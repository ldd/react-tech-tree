import React from "react";
import { Tree, prepareSpritesheetStyle } from "react-tech-tree";
import treeData from "./data/tree.json";
import spriteInformation from "./data/spritesheet.json";
import spriteImage from "./data/spritesheet.png";
import "./index.css";

const { nodes, links } = treeData;

const styleName = prepareSpritesheetStyle(spriteImage, spriteInformation);

const toggleNode = (target, isActive) => {
  // nodes is a 2D Array so flatten it
  const pick = nodes.flat().find(node => node.id === target.id);
  if (!pick) return;

  // there are active alternatives on our tilesheet, which all end in "M"
  // so we modify our target to match the newly picked sprite props
  const oldSpriteName = pick.name;
  const newSpriteName = isActive ? oldSpriteName : `${oldSpriteName}M`;
  const newStyleProps = styleName(newSpriteName);
  Object.entries(newStyleProps).forEach(
    ([key, value]) => (target.style[key] = value)
  );
};

const toggleDependants = (id = "", isActive) => {
  // given a link A-N, we are interested in A and any such dependency of N
  const sourceNode = document.getElementById(id.split("-")[0]);
  if (!sourceNode) return;

  if (isActive) sourceNode.classList.remove("next-active");
  else sourceNode.classList.add("next-active");
};

const onClick = e => {
  const isActive = e.target.classList.contains("active");
  toggleNode(e.target, isActive);

  e.target.classList.toggle("active");

  // we are interested in links that end at node N (A-N, B-N, C-N, etc)
  const id = e.target.id;
  const links = document.querySelectorAll(`path[id$=${id}]`);
  links.forEach(link => {
    link.classList.toggle("active");
    toggleDependants(link.id, isActive);
  });
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
