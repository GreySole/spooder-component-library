import React, { useState, ReactNode } from "react";

interface BorderProps {
  children: ReactNode;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  colorOnHover?: boolean;
  inactiveColor?: string;
}

export default function Border(props: BorderProps) {
  const {
    children,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderColor = "var(--button-border-color)",
    borderWidth = "1px",
    borderStyle = "solid",
    colorOnHover = false,
    inactiveColor = "",
  } = props;

  const [displayBorderColor, setDisplayBorderColor] = useState(borderColor);

  const borderStyleValues =
    borderTop || borderRight || borderBottom || borderLeft
      ? {
          borderTop: borderTop
            ? `${borderWidth} ${borderStyle} ${displayBorderColor}`
            : "none",
          borderRight: borderRight
            ? `${borderWidth} ${borderStyle} ${displayBorderColor}`
            : "none",
          borderBottom: borderBottom
            ? `${borderWidth} ${borderStyle} ${displayBorderColor}`
            : "none",
          borderLeft: borderLeft
            ? `${borderWidth} ${borderStyle} ${displayBorderColor}`
            : "none",
        }
      : {
          borderTop: `${borderWidth} ${borderStyle} ${displayBorderColor}`,
          borderRight: `${borderWidth} ${borderStyle} ${displayBorderColor}`,
          borderBottom: `${borderWidth} ${borderStyle} ${displayBorderColor}`,
          borderLeft: `${borderWidth} ${borderStyle} ${displayBorderColor}`,
        };
  return (
    <div
      className="border-component"
      onMouseOver={
        colorOnHover ? () => setDisplayBorderColor(borderColor) : () => {}
      }
      onMouseOut={
        colorOnHover ? () => setDisplayBorderColor(inactiveColor) : () => {}
      }
      style={{
        width: "inherit",
        height: "inherit",
        transition: "border 0.5s",
        ...borderStyleValues,
      }}
    >
      {children}
    </div>
  );
}
