import React from "react";
import "./Sprite.css";

export const Sprite = ({
  className = "",
  name,
  styleName = () => {},
  ...otherProps
}) => {
  const spriteStyle = {
    ...styleName(name)
  };
  return (
    <div
      className={`${className} Sprite`}
      style={spriteStyle}
      {...otherProps}
    />
  );
};
