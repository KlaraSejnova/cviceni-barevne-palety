import React from "react";
import { SchemeColor } from "../SchemeColor/SchemeColor";
import "./Palette.css";

export const Palette = ({ paletteData }) => {
  return paletteData.map((palette) => (
    <div className="palette" key={palette.name}>
      <div
        className={
          palette.direction == "vertical"
            ? "palette-scheme palette-scheme--vertical"
            : "palette-scheme palette-scheme--horizontal"
        }
      >
        <img
          className="scheme-image"
          src={palette.image}
          alt="Mimosa Retreat"
        />
        <SchemeColor colors={palette.colors}></SchemeColor>
      </div>
      <div className="palette-info">
        <h2>{palette.name}</h2>
        <p>{palette.description}</p>
        <p>
          Photo by{" "}
          <a href={palette.attribution.url} target="_blank">
            {palette.attribution.name}
          </a>
          .
        </p>
      </div>
    </div>
  ));
};
