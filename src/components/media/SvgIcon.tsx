import React from "react";
import { ReactSVG } from "react-svg";

interface SvgIconProps {
  fill: string;
  width?: string;
  height?: string;
  src: string;
  clip?: "circle" | "square";
  onError?: () => void;
}

export default function SvgIcon(props: SvgIconProps) {
  const { fill, width, height, src, clip, onError } = props;

  let clipPath = undefined;
  if (clip === "circle") {
    clipPath = "circle(50% at 50% 50%)";
  } else if (clip === "square") {
    clipPath = "inset(0px round 10%)";
  }

  return (
    <ReactSVG
      src={src}
      style={{ clipPath: clipPath, pointerEvents: "none" }}
      beforeInjection={(svg) => {
        svg.setAttribute("width", width?.toString() || "100%");
        svg.setAttribute("height", height?.toString() || "100%");
        if (fill) {
          svg.setAttribute("fill", fill);
        }
      }}
      onError={(e) => {
        onError && onError();
      }}
    />
  );
}
