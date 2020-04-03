import React from "react";
import "./Sprite.css";
import { styleScale } from "../helpers/styleHelper";

export const Sprite = ({
  className = "",
  name,
  scale = 1,
  styleName = () => {},
  ...otherProps
}) => {
  const spriteStyle = {
    ...styleName(name),
    ...styleScale(scale)
  };
  return (
    <div
      className={`${className} Sprite`}
      style={spriteStyle}
      {...otherProps}
    />
  );
};
