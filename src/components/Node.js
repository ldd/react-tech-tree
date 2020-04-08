import React from "react";
import { Sprite } from "./Sprite";
import "./Node.css";

const toggleChildren = (id, isActive) => {
  // given a link A-N, we are interested in A's child, N
  const childNode = document.getElementById(id.split("-")[1]);
  if (!childNode) return;

  if (isActive) childNode.classList.remove("next-active");
  else childNode.classList.add("next-active");
};

export const clickHandler = e => {
  // toggle target Node active
  const isActive = e.target.classList.contains("active");
  e.target.classList.toggle("active");

  // toggle links that start with this Node active
  const id = e.target.id;
  const links = document.querySelectorAll(`.Link[id^=${id}]`);
  links.forEach(link => {
    link.classList.toggle("active");
    toggleChildren(link.id, isActive);
  });
};

export const Node = props => {
  return <Sprite className="Node" onClick={clickHandler} {...props} />;
};
