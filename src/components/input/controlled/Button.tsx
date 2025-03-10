import React, { useRef, useState } from "react";
import { getIcon } from "../../../util/MediaUtil";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTheme } from "../../../context/ThemeContext";

interface ButtonProps {
  className?: string;
  label?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  icon?: IconProp | string;
  fallbackIcon?: IconProp | string;
  iconSize?: string;
  iconPosition?: "left" | "right" | "top" | "bottom";
  color?: string;
  colorOnHover?: boolean;
  onClick: () => void;
  onLongPress?: () => void;
}

export default function Button(props: ButtonProps) {
  const {
    className,
    label,
    width,
    height,
    disabled,
    icon,
    fallbackIcon,
    iconSize,
    iconPosition,
    onClick,
    onLongPress,
    color,
    colorOnHover,
  } = props;
  const { themeVariables } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);

  let flexFlow = "left";

  switch (iconPosition) {
    case "right":
      flexFlow = "row";
      break;
    case "left":
      flexFlow = "row-reverse";
      break;
    case "bottom":
      flexFlow = "column";
      break;
    case "top":
      flexFlow = "column-reverse";
      break;
  }

  const handleMouseDown = () => {
    longPressTimeout.current = setTimeout(() => {
      if (onLongPress) {
        onLongPress();
        longPressTimeout.current = null;
      }
    }, 500); // 500ms threshold for long press
  };

  const handleMouseUp = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
      onClick();
    }
  };

  const handleMouseLeave = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  };

  return (
    <button
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled ?? false}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        width,
        height,
        display: "flex",
        gap: "1rem",
        flexFlow,
        fontSize: "1rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorOnHover ? (isHovered ? color : undefined) : color,
      }}
    >
      {label}{" "}
      {icon
        ? getIcon(icon, themeVariables.isDarkTheme, iconSize, fallbackIcon)
        : null}
    </button>
  );
}
