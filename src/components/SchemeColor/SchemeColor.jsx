import React from "react";
import "./SchemeColor.css";

export const SchemeColor = ({ colors }) => {
  return (
    <div className="scheme-colors">
      {colors.map((color) => (
        <div
          className="scheme-color"
          key={color}
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      ))}
    </div>
  );
};
