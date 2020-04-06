import React from "react";
import { Sprite } from "./Sprite";
import "./Node.css";

export const clickHandler = e => {
  // toggle target Node active
  e.target.classList.toggle("active");

  // toggle links that start with this Node active
  const id = e.target.id;
  const links = document.querySelectorAll(`.Link[id^=${id}]`);
  links.forEach(link => link.classList.toggle("active"));
};

export const Node = props => {
  return <Sprite className="Node" onClick={clickHandler} {...props} />;
};
