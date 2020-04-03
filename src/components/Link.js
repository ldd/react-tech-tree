import React from "react";
import "./Link.css";

export const Link = ({ pathData = "", ...otherProps }) => {
  return <path d={pathData} {...otherProps} />;
};
