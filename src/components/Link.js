import React from "react";
import "./Link.css";

export const Link = ({ pathData = "", className = "", ...otherProps }) => {
  return <path d={pathData} {...otherProps} className={`${className} Link`} />;
};
