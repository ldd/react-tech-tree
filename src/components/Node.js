import React from "react";
import { Sprite } from "./Sprite";
import "./Node.css";

export const clickHandler = e => {
  e.target.classList.toggle("active");
  const id = e.target.id;
  const links = document.querySelectorAll(`path[id^=${id}]`);
  links.forEach(link => link.classList.toggle("active"));
};

export const Node = props => {
  return <Sprite className="Node" {...props} onClick={clickHandler} />;
};
